import { useState } from 'react'


import './Snapshot.css'

function Snapshot() {

  return (
    <>
      <div className="snapshot">
        <h1 className='snapshot-title'>Professional Snapshot</h1>
        <div className="info-card-group">
          <div className="info-card">
            <h2>3+ Years</h2>
            <p>Work experience in Operations Center & Technical Environments</p>
          </div>
          <div className="info-card">
            <h2>6 Verified Credentials</h2>
            <p>A.S. in Data Science, Diploma in Programming & Repair, and 4 other Technical Certificates</p>
          </div>
          <div className="info-card">
            <h2>10 Completed Projects</h2>
            <p>Showcasing proof of skill, style, and problem-solving ability.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Snapshot;
