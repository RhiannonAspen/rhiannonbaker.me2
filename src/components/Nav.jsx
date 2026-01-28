import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

import titleLogo from '../assets/title-logo.png'

import './Nav.css'

function getDoW(weekday){
    switch (weekday)
    {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wedsnesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";

    }
  }

function Navigation() {
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

 useEffect(() => {
    // ---- TIME ----
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const am_pm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12 || 12;

      setTime(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")} ${am_pm}`
      );
    };

    // ---- DATE ----
    const updateDate = () => {
      const today = new Date();
      const month = today.getMonth() + 1;
      const day = today.getDate();
      const year = today.getFullYear();
      const weekday = today.getDay();

      setDate(
        `${month}/${day}/${year} (${getDoW(weekday)})`
      );
    };

    updateTime();
    updateDate();

    const timeInterval = setInterval(updateTime, 1000);
    const dateInterval = setInterval(updateDate, 1000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(dateInterval);
    };
  }, []);

  

  const navigate = useNavigate()

  const clickToProject = () => {
      navigate('/projects');
  }

  return (
    <>
      <nav id='portfolio-nav'>
        <div className="left">
          <p id='time'>{time}</p>
          <p id='date'>{date}</p>
        </div>
        <img src={titleLogo} alt="Rhiannon Baker - Technology Specialist" height="100px"/>
        <div className="projects">
          <button id='to_projects' onClick={clickToProject}>Check out My Projects!</button>
        </div>
      </nav>
    </>
  )
}

export default Navigation;
