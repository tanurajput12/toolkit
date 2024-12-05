import { useDispatch, useSelector } from "react-redux"
import {increment,decrement} from "./counterSlice";
const Cybrom=()=>{
const myval=useSelector(state=>state.myCounter.count);
const dispatch=useDispatch();
return(
    <>
    <h1>welcome to counter program</h1>
    <button onClick={()=>{dispatch(increment())}}>increment</button>
    <h1>{myval}</h1>
    <button onClick={()=>{dispatch(decrement())}}>decrement</button>
    </>
)
}
export default Cybrom;