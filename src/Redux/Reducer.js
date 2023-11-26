  import {combineReducers} from "redux";
  
 let initialstate={count:0,
    todoTask:[]
}

   export const counterReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "inc":
            return {...state,count:state.count+action.payload}
        case "dec":
            return {...state,count:state.count-action.payload}
        default :
          return state
    }

 }

 //reducer for todoList

 const todoReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "add":
           return{...state,todoTask:[...state.todoTask,action.payload]}

        case "edit":
            return
        
        case "delete":
            return {...state,todoTask:state.todoTask.filter(e=>e.id!==action.payload)}
        default :
           return state;
    }
 }

 //method to combine all the reducer-- combineReducers was a method , we have to import from rdeux

 const rootReducer=combineReducers({counterReducer,todoReducer})

 //we have to export it from here also
 export default rootReducer
