import React from "react"
import profilePic from "./images/me.png" 
import gitLogo from "./images/github.png"
import instaLogo from "./images/instagram.webp"
import inLogo from "./images/linkedin.png"
import './Profile.css'

function Profile(){
    return(
        <>
        <div>
            <img src={profilePic}alt="Shoubhit" className="profile-image"/>
            <div id="socials">
                <a href="https://github.com/Shoubhit"><img src={gitLogo} alt='github logo' className="social-image"/></a>
                <a href="https://www.linkedin.com/in/shoubhit-babu-b467a020b/"><img src={inLogo} alt='linkedin logo' className="social-image"/></a>
                <a href="https://www.instagram.com/og_shoubi/"><img src={instaLogo} alt='insta logo' className="social-image"/></a>
            </div>

        </div>

        </>
    )
}

export default Profile;