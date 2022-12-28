import React from "react"


export default function Destination (props){
    return (
        <div className = "destination">
            <img src={`../images/${props.image}`} className="card--image" />
            <div className = "content">
                <div className = "heading">
                    <img src = "../images/pin.png" />
                    <h4>{props.location}</h4>
                    <h5><a href = {`${props.map}`}>View on Google Maps</a></h5>
                </div>
                <h2>{props.title}</h2>
            
            
                <span>{props.start} - {props.end}</span>
           
            <p>{props.description}</p>
             </div>
        </div>
    )
}