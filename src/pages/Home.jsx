import React from 'react';

import Navigation from '../components/Nav'; 
import Hero from '../components/Hero';
import Snapshot from '../components/Snapshot';
import About from '../components/Aboutme';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

function Home() {

  return (
    <>
      <Navigation />
      <Hero />
      <Snapshot />
      <About />
      <CTA />
      <Footer />
    </>
    
  )
}

export default Home
