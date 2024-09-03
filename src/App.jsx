import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Description from './components/Description'
import ChatBox from './components/ChatBox'
import Project from './components/Project'
import SkillBar from './components/SkillBar'
import Contact from './components/Contact';
import UMDLogo from './assets/umdLogo.png'
import BSLogo from './assets/bs-logo.png'
import DCLogo from './assets/dsLogo.jfif'
import cancerImg from './assets/cancerProject.png'
import secureAPI from './assets/secureAPI.png'
import shellac from './assets/shellac.png'
import pathfinder from './assets/pathfinderProj.gif'

function App() {
  const ItJobDescr = "Managed over 1,000 service tickets using ServiceNow, providing remote technical support for software and hardware issues. Trained new employees in troubleshooting and customer support, ensuring efficient problem resolution."
  const BsJobDescr = "Contributed to a major censorship study in Turkmenistan, developing tools to analyze and visualize network data. Utilized advanced tools like Scapy and Matplotlib to enhance research efficiency and discovered methods to evade censorship using AI-powered tools."
  const DcJobDescr = "Developed a chatbot using SAP’s Conversational AI API to streamline IT support. Created AI-driven workflows for improved information access and collaborated with teams to ensure effective communication."

  const proj1 = "Created a web application using Python and PyTorch that classifies chest cancer from CT scans with 80% accuracy. Deployed the application on HuggingFace and Render, making it accessible online."
  const proj2 = "Built a RESTful API in Go for network analysis and security scanning. Integrated SQLite for backend development, ensuring efficient data management, and provided comprehensive network device information."
  const proj3 = "Developed a command-line shell in C, demonstrating a deep understanding of Linux and systems programming. Implemented features like background jobs and input/output redirection to enhance the shell's functionality."
  const proj4 = "The Pathfindertool project is a Python-based visualization of the A* pathfinding algorithm using Pygame, showcasing how the algorithm navigates a grid to find the shortest path between two points while avoiding obstacles."
  return (
    <>
     <div id='outer-div'>
      <NavBar/>
      <div className="section" id='about'>
        <Profile/>
        <h1 id='info'>Hi I'm <span id='green'>Shoubhit Babu.</span> I'm a computer science student at UMD. Here, you can check out my work expiriences and the stuff I'm working on.</h1>
      </div>
      
      <div className="section colored" id='ama'>
      <h1 className="section-title">Ask Me Anything!</h1>
        <ChatBox/>
      </div>
      <div className=" section" id="experiences">
        <h1 className="section-title">Experiences</h1>
        <div className='row'>
          <table className='col' id='logos'>
            <tr>
              <td>
                <Experience image={UMDLogo} role="Information Technology Lead" date="August 2022 - Present"/>
              </td>
            </tr>
            <tr>
              <td>
                <Experience image={BSLogo} role="Security Research Intern" date="My 2023 - December 2023"/>
              </td>
            </tr>
            <tr>
              <Experience image={DCLogo} role="Artificial Intelligence Intern" date="August 2021- September 2021"/>
            </tr>
          </table>
          <div className='col'>
            <hr className='vline'></hr>
          </div>
          <table id="descriptions" >
            <tr>
              <td><Description company="UMD Division of IT" descr={ItJobDescr}/></td>
            </tr>
            <tr>
              <td><Description company="Breakerspace Labs" descr={BsJobDescr}/></td>
            </tr>
            <tr>
              <td><Description company="Data Core Systems Inc" descr={DcJobDescr}/></td>
            </tr>
          </table>
          
        </div>
        
      </div>
      <div className='section colored' id="projects">
        <h1 className="section-title">Projects</h1>
        <div id = "project-container">
          <Project title="Chest Cancer Classifier" image={cancerImg} descr={proj1}/>
          <Project title="Security Api" image={secureAPI} descr={proj2}/>
          <Project title="Shellac" image={shellac} descr={proj3}/>
          <Project title="A* Algorithm Visualizer" image={pathfinder} descr={proj4}/>
        </div>
      </div>
      <div className='section' id='skills'>
        <h1 className="section-title">Technical Skills</h1>
        <SkillBar skillName="Python" width="95%" level="Advanced"/>
        <SkillBar skillName="Java" width="55%" level="Intermediate"/>
        <SkillBar skillName="C/C++" width="45%" level="Intermediate"/>
        <SkillBar skillName="HTML" width="90%"level="Advanced"/>
        <SkillBar skillName="CSS" width="80%" level="Advanced"/>
        <SkillBar skillName="JavaScript" width="85%" level="Advanced"/>
        </div>
        <div className='section colored' id='contact'>
          <h1 className="section-title">Contact Me</h1>
          <Contact />
          <br></br>
          <p>Email: <a href="mailto:sbabu12@terpmail.umd.edu">sbabu12@terpmail.umd.edu</a></p>
          <br></br>
          <br></br>
        </div>
        <footer>© 2024 Shoubhit Babu. All rights reserved.</footer>
      </div>
    </>
  )
}

export default App
