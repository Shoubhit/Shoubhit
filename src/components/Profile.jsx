import React from "react"
import profilePic from "./images/me.png" 
import './Profile.css'

function Profile(){
    return(
        <>
        <div>
            <img src={profilePic}alt="Shoubhit" className="profile-image"/>
        </div>

        </>
    )
}

export default Profile;