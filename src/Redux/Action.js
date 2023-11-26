  export const Increment=(value)=>{
    return{
        type:"inc",
        payload:value
    }
 }

 export const Decrement=(value)=>{
    return{
        type:"dec",
        payload:value
    }
 }