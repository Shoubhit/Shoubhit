import React from "react"
import './Experience.css'

function Experience(props){
    return(
        <>
        <div className="logo-descr">
            <img id="company-logo" src={props.image}/>
            <p class="leftside" id='role'>{props.role}</p>
            <p class="leftside" id='date'>{props.date}</p>
        </div>
        </>
    )

}

export default Experience;