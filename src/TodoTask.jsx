import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'

function TodoTask() {
     let todoTasks=useSelector((store)=>store.todoReducer.todoTask)
     const[task,setTask]=useState("")

    //  console.log(todoTasks)

    console.log(Date.now())
     const dispatch=useDispatch()

     const addingTask=()=>{
        //date.now()-- generation a new ID every time
        dispatch({type:"add",payload:{task:task,id:Date.now()}})
        // console.log(todoTasks)
        setTask("")
     }
     const deleteTask=(id)=>{
        console.log(id)

        dispatch({type:"delete",payload:id})
     }

     
  return (
    <>
    <h1>TODO COMPONENT</h1>
    <div>
        <input type='text'
        value={task}
        onChange={(e)=>
            setTask(e.target.value)
        } />
        <button onClick={addingTask}>ADD TASK</button>

    </div>
    <h2>{task}</h2>
    <div>
        <h1>YOUR TASK</h1>
        <div style={{display:"flex",gap:"20px 30px",flexWrap:"wrap"}}>
        {todoTasks.map(e=>{
            return <>
            <div style={{backgroundColor:"#666",display:"flex",margin:"20px 0 "}}>
            <h2>{e.task}</h2>
            <button style={{backgroundColor:"#0f0"}}>EDIT</button>
            <button style={{backgroundColor:"#f000",color:"#fff"}} onClick={()=>{deleteTask(e.id)}}>DELETE</button>
            </div>
            </>
        })}
    </div>
</div>
    </>
  )
}

export default TodoTask
