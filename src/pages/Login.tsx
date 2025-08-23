import Button from "../components/Button/Button"
import Card from "../components/card/Card"
import Input from "../components/Input/Input"
import React from "react"

const Login = () => {

    const [password, setPassword] = React.useState<string>("")

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      setPassword(inputValue)
    }

    const handleLogin = () => {
      console.log('login clicked')
    }

  return (
    <div className='flex justify-center items-center h-screen' > 

       <Card className="bg-grey-500">
        <h1 className='text-3xl text-center mb-3 font-bold text-gray-600 '>Login</h1>
       
        <Input
         handleInput ={handleInput}
         value={password}
         placeholder="Enter your username"
         title={"User Name"}
         required={true}
        />

        <Input
         handleInput ={handleInput}
         value={password}
         placeholder="Enter Password"
         title={"Password"}
         required={true}
        />

        <Button 
        onClick={handleLogin}
        cta = {'Login'}
        />
       </Card>
    </div>
  )
}

export default Login