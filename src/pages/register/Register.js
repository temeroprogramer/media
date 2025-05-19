import React from 'react'
import './Register.css';

const Register = () => {
  return (
    <div className="register">
      <div className="loginwrapper">
        <div className="loginleft">
          <h3 className="loginlogo">Temesocial</h3>
          <span className="logindesc">
            connect with friends and the world around you on Temesocial.
          </span>
        </div>
        <div className="loginright">
          <div className="loginbox">
            <input placeholder="Username" className="logininput" />
            <input placeholder="Email" className="logininput" />
            <input placeholder="Password" className="logininput" />
            <input placeholder="Password Again" className="logininput" />

            <button className="loginbutton">Sign up</button>
            {/* <span className="loginforgot">forgot Password?</span> */}
            <button className="loginregisterbutton">log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register
