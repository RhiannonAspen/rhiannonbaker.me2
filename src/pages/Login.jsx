import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import titleLogo from '../assets/title-logo.png'

import './global.css'

function Login() {

  const navigate = useNavigate()

  const clickLogin = () => {
      // const popup = document.getElementById("popupShadow");
      // const login_popup = document.getElementById("loginPopup");
      // popup.style.display = "flex";
      // login_popup.style.display = "flex";
      navigate('/home');
  }

  const clickRequestAccess = () => {
      const popup = document.getElementById("popupShadow");
      const request_popup = document.getElementById("requestPopup");

      popup.style.display = "flex";
      request_popup.style.display = "flex";
  }

  const closePopup = () => {
    const popup = document.getElementById("popupShadow");
    const login_popup = document.getElementById("loginPopup");
    const request_popup = document.getElementById("requestPopup");
    popup.style.display = "none";
    login_popup.style.display = "none";
    request_popup.style.display = "none";
  }

  return (
    <>
    <div className="root">
      <div className="main">
        <img id="home-hero-img" className='pulse-hero' src={titleLogo} alt="Rhiannon Baker - Technology Specialist"/>
        <p className='subtitle'>Access my web based portfolio and explore the skills I bring to your team.</p> 
        <button className="loginBTN" onClick={clickLogin}>Sign In</button>  
        <p>OR</p>
        <button className="requestBTN" onClick={clickRequestAccess}>Request Access</button>   
      </div>

      <div id="popupShadow">
        <div id="loginPopup">
          <button onClick={closePopup} className="closeLoginPopup">Back to Page</button>
          <form action="" className="login">
            <label htmlFor="">Login</label>
          </form>
        </div>
        <div id="requestPopup">
          <button onClick={closePopup} className="closeRequestPopup">Back to Page</button>
          <form action="" className="request">
            <label htmlFor="">Request</label>
          </form>
        </div>
      </div>
    </div>


    </>
  )
}

export default Login
