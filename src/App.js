import React from 'react'

// import UseReduce2 from './UseReduce2'
// import Axios from './Axios'
import Child from './Child'
import {Provider} from 'react-redux'
import store from './Redux/Store'
import TodoTask from './TodoTask'

function App() {
  return (
    <>
      {/* // <UseReduce2></UseReduce2> */}
      {/* <Axios/> */}
       

       {/* //provider is the acessibility to the store if we wrap outside the provider we cannot access store inside any component which is outside of the provider */}
      <Provider store={store}>
        <Child/>
        <TodoTask/>
      </Provider>

      
      </>
  )
}

export default App
