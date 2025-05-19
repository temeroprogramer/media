import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
        <div className='loginwrapper'>
            <div className='loginleft'>
                <h3 className='loginlogo'>Temesocial</h3>
                <span className='logindesc'>connect with friends and the world around you on Temesocial.</span>
            </div>
            <div className='loginright'>
                <div className='loginbox'>
                    <input placeholder='Email' className='logininput'/>
                    <input placeholder='Password' className='logininput'/>
                    <button className='loginbutton'>log in</button>
                    <span className='loginforgot'>forgot Password?</span>
                    <button className='loginregisterbutton'>Create a New Account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
