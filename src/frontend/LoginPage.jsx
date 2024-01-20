import React from 'react';
import './LoginPage.css'; 

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="background"></div>
      <div className="logo"></div>
      <div className="login-box">
        <div className="rectangle-1"></div>
        <div className="profile"></div>
        <div className="rectangle-2"></div>
        <div className="your-username">Your Username</div>
        <div className="password">Password</div>
        <div className="sign-in">Sign In</div>
        <div className="forgot-password">Forgot your password?</div>
        <div className="title">Login</div>
        <div className="rectangle-6"></div>
      </div>
    </div>
  );
};

export default LoginPage;
