import { useState } from 'react'

import heroImg from '../assets/hero-img.png'
import heroText from '../assets/hero-text.png'

import './Hero.css'

function Hero() {

  return (
    <>
      <div className="hero">
        <img src={heroImg} alt="Rhiannon Baker" />
        <img src={heroText} alt="Rhiannon Baker" />
      </div>
    </>
  )
}

export default Hero;
