import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Project from './pages/Project'
import GraphicDesign from './pages/graphic-design-website/Graphic-Design-Home'

function App() 
{
  return (
    <Routes>
      <Route path="/" element={<Login title="Rhiannon Baker - Portfolio Login"/>} />
      <Route path="/home" element={<Home title="Home - Rhiannon Baker - Portfolio"/>} />
      <Route path='/projects' element={<Project title="Projects - Rhiannon Baker - Portfolio" />}/>
      <Route path='/graphicdesign' element={<GraphicDesign title="Graphic Design - Rhiannon Baker - Portfolio" />}/>
    </Routes>
  );
}

export default App;
