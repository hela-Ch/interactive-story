import { useState } from "react";

//import React from 'react';

const Button = (props) => {
    return(
        <button onClick={props.handleClick}>{props.name} </button>
    )
}

const Compteur = () => {

    

   const [count,setCount] = useState(0);
   const updateCount = (x)=>{
       setCount(count+x);
   }
   

    return (
        <div>
            <h1> page compteur</h1>
            <p> Valeur du compteur: {count}</p>
            {/*<button onClick={incrementer}> Incrémenter</button>
            <button onClick={decrementer}>Décrémenter </button>*/}
            <Button name="Incrementer" handleClick={()=>updateCount(1)}/>
            <Button name="decrementer" handleClick={()=>updateCount(-1)}/>
        </div>
    )
}
export default Compteur;