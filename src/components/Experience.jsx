import React from "react"
import './Experience.css'

function Experience(props){
    return(
        <>
        <div className="logo-descr">
            <table>
                <tr>
                    <td rowSpan={2}><img id="company-logo" src={props.image}/></td>
                    <td className="center"><h2 className="leftside" id='role'>{props.role}</h2></td>
                </tr>
                <tr>
                    <td className="center"><p className="leftside" id='date'>{props.date}</p></td>
                </tr>
            </table>
        </div>
        </>
    )

}

export default Experience;