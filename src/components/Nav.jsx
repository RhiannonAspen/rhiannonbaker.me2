import { useState } from 'react'

import titleLogo from '../assets/title-logo.png'

import './Nav.css'

function Navigation() {

  return (
    <>
      <nav>
        <div className="left">
          <p id='time'>Time</p>
          <p id='date'>Date</p>
        </div>
        <img src={titleLogo} alt="Rhiannon Baker - Technology Specialist" height="100px"/>
        <div className="projects">
          <button id='to_projects'>Check out My Projects!</button>
        </div>
      </nav>
    </>
  )
}

export default Navigation;
