import Button from "../components/Button/Button";
import Card from "../components/card/Card";
import Input from "../components/Input/Input";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../fetch";
import { saveToken, getUserFromToken } from "../utility/auth";

const Login = () => {
  const navigate = useNavigate();
  const [mobileNo, setMobileNo] = useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(inputValue);
  };

  const handleMobileNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNo(e.target.value);
  };

  const handleLogin = async () => {
    const user = {
      mobile_no: mobileNo,
      password: password,
    };
    try {
      const data = await login(user);
      saveToken(data.token);
      const userInfo = getUserFromToken();
      if (userInfo?.role === "admin") {
        navigate("/admin");
      } else if (userInfo?.role === "user") {
        navigate("/");
      } else {
        // fallback if role is missing
        navigate("/");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="bg-grey-500">
        <h1 className="text-3xl text-center mb-3 font-bold text-gray-600 ">
          Login
        </h1>

        <Input
          handleInput={handleMobileNo}
          value={mobileNo}
          placeholder="Enter your username"
          title={"User Name"}
          required={true}
        />

        <Input
          handleInput={handleInput}
          value={password}
          placeholder="Enter Password"
          title={"Password"}
          required={true}
        />

        <Button onClick={handleLogin} cta={"Login"} />
      </Card>
    </div>
  );
};

export default Login;
