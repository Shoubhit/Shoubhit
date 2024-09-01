import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Experience from './components/Experience'
import ItTurtle from './assets/ItTurtle.jpg'
import UMDLogo from './assets/UMDLogo.png'
import BSLogo from './assets/bs-logo.png'
import DCLogo from './assets/dsLogo.jfif'
import Description from './components/Description'
import ChatBox from './components/ChatBox'

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
          <div className='col'>
            <Experience image={UMDLogo} role="Information Technology Lead" date="August 2022 - Present"/>
            <Experience image={BSLogo} role="Security Research Intern" date="My 2023 - December 2023"/>
            <Experience image={DCLogo} role="Artificial Intelligence Intern" date="August 2021- September 2021"/>
          </div>
          <div className='col'>
            <hr className='vline'></hr>
          </div>
          <table>
            <tr>
              <td><Description company="UMD Division of IT" descr="njfkrjnagjkrnjkgnrejk;ngkrj;eng"/></td>
            </tr>
            <br></br>
            <tr>
              <td><Description company="Breakerspace Labs" descr="njfkrjnagjkrnjkgnrejk;ngkrj;eng"/></td>
            </tr>
            <tr>
              <td><Description company="Data Core Systems Inc" descr="njfkrjnagjkrnjkgnrejk;ngkrj;eng"/></td>
            </tr>
            <br></br>
            </table>
          
        </div>
        
      </div>
      <div className='section colored' id="projects">
        <h1 className="section-title">Projects</h1>


      </div>
      
     </div>
    </>
  )
}

export default App
