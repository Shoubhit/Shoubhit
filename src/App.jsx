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

function App() {

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
          <table>
            <tr>
              <td><Description company="UMD Division of IT" descr="njfkrjnagjkrnjkgnrejk;ngkrj;eng"/></td>
            </tr>
            <tr>
              <td><Description company="Breakerspace Labs" descr="njfkrjnagjkrnjkgnrejk;ngkrj;eng"/></td>
            </tr>
            <tr>
              <td><Description company="Data Core Systems Inc" descr="njfkrjnagjkrnjkgnrejk;ngkrj;eng"/></td>
            </tr>
          </table>
          
        </div>
        
      </div>
      <div className='section colored' id="projects">
        <h1 className="section-title">Projects</h1>
        <Project title="Chest Cancer Classifier" descr="nn n n "/>
        <Project title="Security Api" descr="nn n n "/>
        <Project title="Shellac" descr="nrfjwnfkjrnjfn"/>

      </div>
      <div className='section' id='skills'>
        <h1 className="section-title">Technical Skills</h1>
        <SkillBar skillName="Python" width="95%" level="Advanced"/>
        <SkillBar skillName="Java" width="55%" level="Intermediate"/>
        <SkillBar skillName="C/C++" width="45%" level="Intermediate"/>
        <SkillBar skillName="HTML" width="90%"level="Advanced"/>
        <SkillBar skillName="CSS" width="80%" level="Advanced"/>
        <SkillBar skillName="JavaScript" width="65%" color="#f44336" level="Advanced"/>
        </div>
        <div className='section colored' id='contact'>
          <h1 className="section-title">Contact Me</h1>
          <Contact />
          <br></br>
          <p>Email: <a href="mailto:sbabu12@terpmail.umd.edu">sbabu12@terpmail.umd.edu</a></p>
          <br></br>
          <br></br>
        </div>
        <div className='section'>

        </div>
      </div>
    </>
  )
}

export default App
