import Navigation from '../components/Nav'; 
import Footer from '../components/Footer';

import { useState, useEffect } from 'react'

import './global.css'

import heroIMG from "../assets/projects-hero.png"
import cvtech from "../assets/certificates/cvtech.png"
import associates from "../assets/certificates/associates.png"
import itf from "../assets/certificates/itf.png"
import aplus from "../assets/certificates/aplus.png"
import azurefund from "../assets/certificates/azurefund.png"
import avaya from "../assets/certificates/avaya.png"
import toscaas1 from "../assets/certificates/toscaas1.png"


function Login({title}) {

  useEffect(() => {
    document.title = title;
  }, [title]);

  const clickClose = () => {
    const dataDisplay = document.getElementById("display-data");

    dataDisplay.style.display = "none";
  }

  const clickCVTECH = () => {
    const dataDisplay = document.getElementById("display-data");

    dataDisplay.style.display = "flex";

    const dataHeading = document.getElementById("data-heading");
    const dataArea = document.getElementById("data-text");
    dataHeading.innerText = "Two Year Technical Diploma in Computer Programming and Repair"
    dataArea.innerText = "\n Aquired Web Development Skills: HTML5, CSS3, JavaScript, and Web Design Fundamentals\n Basic Programming Concepts and Data Structures for Languages such as C#, Python, and Java\n Built PC's and Troubleshooted common computer hardware issues";
  }

  const clickAssociates = () => {
    const dataDisplay = document.getElementById("display-data");

    dataDisplay.style.display = "flex";

    const dataHeading = document.getElementById("data-heading");
    const dataArea = document.getElementById("data-text");
    dataHeading.innerText = "Associates of Science in Data Analytics"
    dataArea.innerText = "\n Basic and Advanced SQL Querying\n ETL, Data pipeline, Big Data skills \n Data Gathering, Cleaning, Transforming, and Visualization skills";
  }

  const clickITF = () => {
    const dataDisplay = document.getElementById("display-data");

    dataDisplay.style.display = "flex";

    const dataHeading = document.getElementById("data-heading");
    const dataArea = document.getElementById("data-text");
    dataHeading.innerText = "CompTIA ITF+"
    dataArea.innerText = "\n Understanding what IT is and how it supports businesses\n Understanding how operating systems work and how to install / uninstall software \n Recognizing common security threats and common cyber security practices \n Basic problem-solving approach to IT issues \n Understanding documentation and following procedures";
  }
  
const clickAzureFund = () => {
    const dataDisplay = document.getElementById("display-data");

    dataDisplay.style.display = "flex";

    const dataHeading = document.getElementById("data-heading");
    const dataArea = document.getElementById("data-text");
    dataHeading.innerText = "AZ-900 Microsoft Azure Fundamentals"
    dataArea.innerText = "\n Solid building blocks of Cloud Computing and Cloud Models\n Ability to explain and recommend Core Azure Services\n Azure Security, Compliance and Trust concepts\n Azure Pricing and Cost Management Techniques";
  }

const clickAPlus = () => {
    const dataDisplay = document.getElementById("display-data");

    dataDisplay.style.display = "flex";

    const dataHeading = document.getElementById("data-heading");
    const dataArea = document.getElementById("data-text");
    dataHeading.innerText = "CompTIA A+"
    dataArea.innerText = "\n Gained practical and hands-on skills understanding Computer Hardware, Operating System Management, Networking, Secuirty, and Troubleshoooting Skills \n Diagnosing hardware and software failures and replacing components when needed \n Installing, Configuring , and maintaining Operating Systems such as Windows 10 and 11, Linux Distibutions (CentOS, RHEL 8), and MacOS \n User accounts, permissions, and system settings \n Command-line tools \n System recovery, backups, and restore options \n Malware removal, Securing devices (firewalls, antivirus, encryption), User authentication and access control";
  }

  const clickAvaya = () => {
    const dataDisplay = document.getElementById("display-data");

    dataDisplay.style.display = "flex";

    const dataHeading = document.getElementById("data-heading");
    const dataArea = document.getElementById("data-text");
    dataHeading.innerText = "Avaya Aura Communication Manager Specialized Administrator"
    dataArea.innerText = "\n Enterprise Telephony Fundamentals such as PBX concepts, call flow logic, extensions, stations, trunks, and hunt groups\n Voice Networking Concepts such as SIP and H.323 fundamentals, VoIP call signalling, and Quality of Service concepts\n Integration of Enterprise level Features specifically utilizing the Avaya Series of Products";
  }

  const clickToscaAs1 = () => {
    const dataDisplay = document.getElementById("display-data");

    dataDisplay.style.display = "flex";

    const dataHeading = document.getElementById("data-heading");
    const dataArea = document.getElementById("data-text");
    dataHeading.innerText = "Tricentis Tosca Automation Specialist 1"
    dataArea.innerText = "\n Model-based Software Testing Automation Foundations\n Software Quality Assurance Concepts such as Defect lifecycle, Test coverage, and risk-based testing\n CI/CD & DevOps Awareness from a Software perspective";
  }

  return (
    <>
      <Navigation />
      <div className="projects-hero">
        <div className="projects-hero-navigation">
          <h1>Projects by Subject</h1>
          <button>Full Stack Development</button>
          <button>Data Science</button>
          <button>IT Infrastructure</button>
          <button>Automation</button>
          <button>More Coming Soon</button>
        </div>
        <img src={heroIMG} alt="" />
      </div>

      <div className="featured">
        Accreddited Certifications
        <p>Click on the icons below to get more details about the certificate</p>
        <div className="certifications">
          <img src={cvtech} onClick={clickCVTECH} alt="Technical Diploma in Computer Programming and Repair" />
          <img src={associates} onClick={clickAssociates} alt="Associates of Science in Data Analytics" />
          <img src={itf} onClick={clickITF} alt="CompTIA ITF+ Ceritifcation" />
          <img src={aplus} onClick={clickAPlus} alt="CompTIA A+ Certification" />
          <img src={azurefund} onClick={clickAzureFund} alt="Microsoft Azure Fundamentals AZ-900" />
          <img src={avaya} onClick={clickAvaya} alt="Avaya Aura Communication Manager Administrator Specialized" />
          <img src={toscaas1} onClick={clickToscaAs1} alt="Tricentis Tosca Automation Specialist 1" />
        </div>
      </div>
      <div id="display-data">
        <h2 id='data-heading'></h2>
        <p id='data-text'></p>
        <button onClick={clickClose} id='close-data'>Close</button>
      </div>
      <Footer />
    </>
  )
}

export default Login;
