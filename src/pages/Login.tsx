import Button from "../components/Button/Button"
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
    <div>
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
    </div>
  )
}

export default Login