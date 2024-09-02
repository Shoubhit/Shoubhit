import React from "react"
import './Project.css'

function Project(props){
    return(
        <div className="proj-descr">
            <h2 id="title">{props.title}</h2>
            <img id="projImage" src={props.image} alt ={props.title}/>
            <p id="descr">{props.descr}</p>
        </div>
    )

}

export default Project;