import React from "react"
import './Experience.css'

function Description(props){
    return(
        <>
        <div className="logo-descr">
            <h1 id='company'>{props.company}</h1>
            <p id='descr'>{props.descr}</p>
        </div>
        </>
    )

}

export default Description;