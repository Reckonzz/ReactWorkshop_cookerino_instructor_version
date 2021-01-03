import React from "react"

import "./ingredientBox.styles.css"

const IngredientBox = (props) => {
    return(
        <div onClick={() => props.removeIngredient(props.idx)} className="ingredient-box">
            {props.ing ? <img src={props.ing.imgSrc}/>: ""}
        </div> 
    )
}

export default IngredientBox

