import React from 'react'
import { useReducer } from 'react';

const counterReducer=(state,action)=>{
    switch(action.type){
        case "inc":
            return state+1;
        case "dec":
            return state-1;
        case "reset":
            return 0
        default:
            return 0;
    }
}   

function UseReduce2() {
    const [State,dispatch]=useReducer(counterReducer,0)
  return (
    <>
    
    <h1>{State}</h1>
    <button onClick={()=>{dispatch({type:'inc'})}} >Inc</button>
    <button onClick={()=>{dispatch({type:'dec'})}}> Dec</button>
    <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </>
    
  )
}

export default UseReduce2
