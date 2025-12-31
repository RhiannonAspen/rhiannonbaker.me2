import { useState } from 'react'

import aboutLeftImg from '../assets/about-left.png'
import aboutRightImg from '../assets/about-right.png'

import './Aboutme.css'

function About() {

  return (
    <>
      <div className="about-section">
        <img src={aboutLeftImg} alt="Rhiannon and daughter looking at voltswagon beetle" />
        <div className="about-content">
          <h2>About Me</h2>
          <p>I am driven by curiosity and the desire to make technology work better for people. My journey began in IT operations, where I learned the value of reliability and precision. Today, I apply that same mindset to building websites, software, and data solutions that are both useful and user-friendly.</p>
        </div>
        <img src={aboutRightImg} alt="Rhiannon and her daughter" />
      </div>
    </>
  )
}

export default About;
