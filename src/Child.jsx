import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Decrement, Increment } from './Redux/Action';

function Child() {
    let count=useSelector((store)=> store.counterReducer.count)
    console.log(count);
    let dispatch=useDispatch()
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(Increment(10))}>INC</button>
    <button onClick={()=>dispatch(Decrement(20))}>DEC</button>
    </>
  )
}

export default Child
