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
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </header>

        </div>

        </>
    )
}

export default NavBar;