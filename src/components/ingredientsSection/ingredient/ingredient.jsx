import React from "react"

import "./ingredient.styles.css"

const Ingredient = (props) => {
    return (
        <div className="ingredient">
            <img src={props.ing.imgSrc} onClick={() => props.addIngredient(props.ing)}/>
        </div>
    )
}

export default Ingredient






