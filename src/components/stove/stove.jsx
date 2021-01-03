import React from "react"

import "./stove.styles.css"
import stoveImg from "../../images/stove.png"

import CookedDelicacy from "./cookedDelicacy/cookedDelicacy"
import IngredientBox from  "./ingredientBox/ingredientBox"

const Stove = (props) => {
    return (
        <div className='section stove'>
            <div>
                <CookedDelicacy eatDelicacy={props.eatDelicacy} delicacySrc={props.delicacySrc}/>
                <div className="ingredients-boxes-container">
                    {props.ingredientsBoxes.map((ing,idx) => <IngredientBox key={idx} ing={ing} removeIngredient={props.removeIngredient} idx={idx}/>)}
                </div>
                <img className="stove-img" src={stoveImg} alt='stove'/>
                <button onClick={props.cook} className="cook-btn"><span className="cook-btn-text">cook</span></button>
            </div>
        </div> 
    )
}

export default Stove 




// const Stove = (props) => {
//     return (
//         <div className='section stove'>
//             <CookedDelicacy eatDelicacy={props.eatDelicacy} imgSrc={props.imgSrc}/>
//             <div>
//                 <div className="ingredients-boxes-container">
//                     {props.ingredientsBoxes.map((ingredient,idx) => <IngredientBox key={idx} removeIngredient={props.removeIngredient} idx={idx} ingredient={ingredient}/>)}
//                 </div>
//                 <img className="stove-img" src={stoveImg} alt='stove'/>
//             </div>
//             <button onClick={props.cook} className="cook-btn"><span className="cook-btn-text">cook</span></button>
//         </div> 
//     )
// }

// export default Stove 