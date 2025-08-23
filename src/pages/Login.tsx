import Input from "../components/Input/Input"
import React from "react"

const Login = () => {

    const [password, setPassword] = React.useState<string>("")

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      setPassword(inputValue)
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
    </div>
  )
}

export default Login