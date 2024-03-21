import React, { useState } from 'react';
import propTypes from "prop-types";

export const Conter = ({value}) => {
    
  const [cont ,setCount] = useState(0);

  const contador = function(){
     setCount(cont + 1);
  }
  const decremento = function(){
    setCount(cont - 1);
 }
 const reset = function(){
    setCount(0);
 }
 
  return (
    <>
        <h1>contador</h1>
        <h2>{cont}</h2>
        <button
            name=""
            id=""
            class="btn btn-primary"
            href="#"
            role="button"
            onClick={contador}
            >+1</button>

            <button
            name=""
            id=""
            class="btn btn-primary"
            href="#"
            role="button"
            onClick={decremento}
            >-1</button>

            <button
            name=""
            id=""
            class="btn btn-primary"
            href="#"
            role="button"
            onClick={reset}
            >reset</button>
        
        
    </>
    
  )
}
Conter.prototype = {
    value:propTypes.number.isRequired
}
