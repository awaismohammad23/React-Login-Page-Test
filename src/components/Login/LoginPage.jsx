import React from 'react';
import './LoginPage.css';
import LogoImage from '../../assets/Logo.svg';
const LoginPage = () => {

  return (
    <div className='background'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className="login-content">
        <div className='logo'>
          <img src={LogoImage} alt="Logo" />
        </div>

        <div className='login-text'>
            USER LOGIN
        </div>

        <input className='input' type="text" placeholder="Your Username" />
        <input className='input' type="password" placeholder="Password" />

        <button className='login-button'>Sign In</button>
            
        <div className='forgot-password'>Forgot Password?</div>
      </div>
    </div>
  );
};

export default LoginPage;
