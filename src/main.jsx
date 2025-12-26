
import { createRoot } from 'react-dom/client'
import Login from './Login.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>
)
