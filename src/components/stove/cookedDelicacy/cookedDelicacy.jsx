import React from "react"

import "./cookedDelicacy.styles.css"

const CookedDelicacy = (props) => {
    return (
        <div onClick={props.eatDelicacy} className="cooked-delicacy">
            {props.delicacySrc ? <img src={props.delicacySrc}/> : ""} 
        </div>
    )
}

export default CookedDelicacy


