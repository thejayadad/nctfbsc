
import React from 'react'
import {BsFacebook } from "react-icons/bs"
import {FcGoogle } from "react-icons/fc"
import {signIn} from "next-auth/react"
const Login = () => {
  return (
    <div>
        <h2>Login</h2>
        <BsFacebook />
    <div>
        <p onClick={() => signIn("google")}>
        <FcGoogle />
            SignIn with Google
        </p>
    </div>
    </div>
  )
}

export default Login