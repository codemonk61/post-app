import { useState } from "react";
import Card from "../components/card/Card";
import Input from "../components/Input/Input";
import Dropdown from "../components/dropdown/Dropdown";
import Button from "../components/Button/Button";
import { register } from "../fetch";

const options = [
  {
    key: "user",
    label: "User",
  },
  {
    key: "admin",
    label: "Admin",
  },
  {
    key: "super_admin",
    label: "Super Admin",
  },
];

const SignUp = () => {
  const [username, setUserName] = useState<string>("");
  const [mobileNo, setMobileNo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cnfPassword, setCnfPassword] = useState<string>("");
  const [role, setRole] = useState<string>("user");

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleMobileNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNo(e.target.value);
  };

  const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCnfPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnfPassword(e.target.value);
  };

  const handleSignUp = async () => {
    const user = {
      username: username,
      mobile_no: mobileNo,
      role: role,
      password: password,
    };  

    try {
      const data = await register(user); 
      // ✅ wait for API call
      console.log(data); // ✅ result
    } catch (err) {
      console.error("Signup error:", err);
    }

    console.log(
      "registered succesfully",
      username,
      mobileNo,
      role,
      password,
      cnfPassword
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <h1 className="text-3xl text-center mb-3 font-bold text-gray-600 ">
          Sign Up
        </h1>

        <Input
          handleInput={handleUserName}
          placeholder={"username"}
          value={username}
          title={"username"}
          required={true}
        />

        <Input
          handleInput={handleMobileNo}
          placeholder={"Mobile No"}
          value={mobileNo}
          title={"Mobile No:"}
          required={true}
        />

        <Dropdown
          title={"Choose Role"}
          onChange={handleDropdown}
          options={options}
        />

        <Input
          handleInput={handlePassword}
          placeholder={"Password"}
          value={password}
          title={"Password"}
          required={true}
        />

        <Input
          handleInput={handleCnfPassword}
          placeholder={"confirm Password"}
          value={cnfPassword}
          title={"Confirm Password"}
          required={true}
        />
        <Button onClick={handleSignUp} cta={"Register"} />
      </Card>
    </div>
  );
};

export default SignUp;
