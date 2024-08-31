import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Experience from './components/Experience'
import ItTurtle from './assets/ItTurtle.jpg'
import Description from './components/Description'

function App() {

  return (
    <>
     <div id='outer-div'>
      <NavBar/>
      <div class="section" id='about'>
        <Profile/>
        <h1 id='info'>Hi I'm <span id='green'>Shoubhit Babu.</span> I'm a computer science student at UMD. Here, you can check out my work expiriences and the stuff I'm working on.</h1>
      </div>
      <div class=" section colored" id="experiences">
        <h1 class="section-title">Experiences</h1>
        <div className='row'>
          <div className='col'>
            <Experience image={ItTurtle} role="Inofromation Technology Lead" date="August 2022 - Present"/>
          </div>
          <div className='col'>
            <hr className='vline'></hr>
          </div>
          <div className='col'>
            <Description company="University of Maryland Division of IT" descr="njfkrjnagjkrnjkgnrejk;ngkrj;eng"/>
          </div>
          
        </div>
        
      </div>
      
     </div>
    </>
  )
}

export default App
