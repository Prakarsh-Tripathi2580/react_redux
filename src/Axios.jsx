import React, { useEffect, useState } from 'react'

import axios from 'axios'

function Axios() {

    // for showing on document we have to take state
    let[products,setProducts]=useState([])
    //we use useEffect because it was a side effect , we are working out side of the DOM
    useEffect(()=>{
        //we have to mention that the type of request also
        //in axios we dont need to convert it into json data 
       axios.get("https://dummyjson.com/products")
       //in below line d return, data object nd in this we have products key , so we write d.data.products, we are taking dummy data so this cause we have to  write .products ---console.log(d.data.products)
       //in the below line we are changing state
        .then(d=>setProducts(d.data.products))
        .catch(err=>console.log(err))
    },[])
  return (
   <>
   <h1>Axios</h1>
   {/* this we are using to show data in list format to the document */}
   <div className='row'>
   {products.map(e=>{
        return (
            // <div>
            //     {/* these are the key name which we are getting in the products object */}
            //     <li>{e.id}</li>
            //     <li>{e.title}</li>
            //     <li>{e.description}</li>
            //     <li>{e.price}</li>
            //     <li><img src={e.images[0]}></img></li>
            // </div>


          //in this we show data in form of card
            <div className="card"  classNAme="col-4"
             style={{width: "300px",height:"500px",}}>
          <img src={e.images[0]} className="card-img-top" classNAme="figure-img img-fluid rounded" alt="..."></img>
          <div classNAme="card-body">
          <h5 className="card-title">{e.title}</h5>
          <p className="card-text">{e.description}</p>
         <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
        )
   })}
   </div>
   </>
   

  )
}

export default Axios
