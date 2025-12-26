import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import titleLogo from './assets/title-logo.png'


import './Login.css'

function Login() {

const clickLogin = () => {
    const popup = document.getElementById("popupShadow");
    popup.style.display = "flex";
  }

const clickRequestAccess = () => {
    alert('Button clicked! Request Access');
  }

const closePopup = () => {
    const popup = document.getElementById("popupShadow");
    popup.style.display = "none";
  }

  return (
    <>
      <div className="main">
        <img src={titleLogo} alt="Rhiannon Baker - Technology Specialist"/>
        <p className='subtitle'>Access my web based portfolio and explore the skills I bring to your team.</p> 
        <button onClick={clickLogin}>Sign In</button>  
        <p>OR</p>
        <button onClick={clickRequestAccess}>Request Access</button>   
      </div>

      <div id="popupShadow">
        <div className="loginPopup">
          <button onClick={closePopup} className="closeLoginPopup">Back to Page</button>
          <form action="" className="login">
            <label htmlFor="">Test</label>
          </form>
        </div>
        <div className="requestPopup">
          <button onClick={closePopup} className="closeRequestPopup">Back to Page</button>
          <form action="" className="request">
            <label htmlFor="">Test</label>
          </form>
        </div>
      </div>

    </>
    
  )
}

export default Login
