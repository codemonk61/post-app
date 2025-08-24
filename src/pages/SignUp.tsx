import { useState } from "react";
import Card from "../components/card/Card";
import Input from "../components/Input/Input";

const SignUp = () => {
  const [username, setUserName] = useState<string>('')
  const [mobileNo, setMobileNo] = useState<string>('')

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }

  const handleMobileNo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNo((e.target.value))
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <Card>
        <Input
        handleInput = {handleUserName}
        placeholder={'username'}
        value={username}
        title={"username"}
        required= {true}
        />

        <Input
        handleInput = {handleMobileNo}
        placeholder={'Mobile No'}
        value={mobileNo}
        title={"Mobile No:"}
        required= {true}
        />
        
      </Card>
      
    </div>
  );
};

export default SignUp;
