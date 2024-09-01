import React, { useEffect } from 'react';
import logo from './images/logo.png'
import './NavBar.css'

function NavBar(){
    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('header');
          header.classList.toggle('sticky', window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <>
        <div className="header">
            <header>
            <img src={logo} alt="Logo" className="logo"/>
                <ul>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#experiences">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                </ul>
            </header>

        </div>

        </>
    )
}

export default NavBar;