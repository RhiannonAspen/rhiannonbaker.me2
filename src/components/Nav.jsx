import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import titleLogo from './assets/title-logo.png'

import './Nav.css'

function App() {
  const [count, setCount] = useState(0)

  function updateCount()
  {
    count = count + 1
    return count;
  }

  return (
    <>
      <nav>
        <div className="left">
          <p id='time'>Time</p>
          <p id='date'>Date</p>
        </div>
        <img src={titleLogo} alt="Rhiannon Baker - Technology Specialist" height="130px"/>
        <button id='projects'>Check out My Projects!</button>
      </nav>
    </>
  )
}

export default App
