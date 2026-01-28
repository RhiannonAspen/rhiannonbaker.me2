import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Project from './pages/Project'
import GraphicDesign from './pages/graphic-design-website/Graphic-Design-Home'

function App() 
{
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path='/projects' element={<Project />}/>
      <Route path='/graphicdesign' element={<GraphicDesign />}/>
    </Routes>
  );
}

export default App;
