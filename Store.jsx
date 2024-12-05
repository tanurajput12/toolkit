import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice";
const Store=configureStore({
reducer:{
    myCounter:countReducer
}
}
)
export default Store;