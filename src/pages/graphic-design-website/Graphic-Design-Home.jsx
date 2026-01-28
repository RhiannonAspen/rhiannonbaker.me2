import { useState, useEffect } from 'react'

import './graphic-design.css'

import FG from "../../assets/graphic-design-assets/graphic-fg.png"
import GraphicHome from '../../components/graphic-design-components/GraphicHome';

function GraphicDesignPage({title}) {

  useEffect(() => {
      document.title = title;
    }, [title]);

  return (
    <>
      <GraphicHome />
    </>
    
  )
}

export default GraphicDesignPage;
