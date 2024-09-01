import React from "react"
import './Description.css'

function Description(props){
    return(
        <>
        <div className="company-descr">
            <table>
                <tr>
                    <td><h2 id='company'>{props.company}</h2></td>
                </tr>
                <tr>
                   <td><p id='descr'>{props.descr}</p></td>
                </tr>

            </table>
        </div>
        </>
    )

}

export default Description;