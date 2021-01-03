import React from "react"

import "./ingredientsSection.styles.css"

import Ingredient from "./ingredient/ingredient"

const IngredientsSection = (props) => {
    return (
        <div className="section ingredients-container"> 
            {props.ingredients.map((ing, idx) => <Ingredient key={idx} ing={ing} addIngredient={props.addIngredient}/>)}
        </div>
    )
}

export default IngredientsSection



// import React from "react"

// import "./ingredientsSection.styles.css"

// import Ingredient from "./ingredients/ingredients"

// const IngredientsSection = (props) => {
//     return (
//         <div className="section ingredients-container"> 
//             {props.ingredients.map((ing, idx) => <Ingredient key={idx} addIngredient={props.addIngredient} ing={ing}/>)}
//         </div>
//     )
// }

// export default IngredientsSection