 import rootReducer, { counterReducer } from "./Reducer";

 import {legacy_createStore} from "redux"

 
// reducer connected 
 const store=legacy_createStore(rootReducer)


 export default store 