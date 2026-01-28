import { useNavigate } from 'react-router-dom'

import './CTA.css'

function CTA() {
  const navigate = useNavigate()
  const clickToProject = () => {
      navigate('/projects');
  }

  return (
    <>
      <div className="cta-section">
        <h2>Discover My Creations</h2>
        <button onClick={clickToProject}>To My Project Page</button>
      </div>
    </>
  )
}

export default CTA;
