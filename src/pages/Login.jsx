/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react"


const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className='logo'>Pr Chat</span>
            <span className='title'>Login</span>
            <form >
            <input type="email" name="" id="" placeholder='Email'/>
            <input type="password" name="" id=""placeholder='Password' />
             
            <button>Log in</button>
            
            </form>
            
            <p>You don't have an account? Register</p>
            </div>
        </div>
  )
}

export default Login