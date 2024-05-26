import React from "react";
import { decrease, increase, reset } from "../freature/counter/counterSlice";

const Counter = ({ count, dispatch }) => {
  return (
    <div className="Counter container-lg bg-dark-subtle text-center shadow-sm rounded-4 ">
      <h1 className="counter p-2 my-2 text-danger"> {count}</h1>
      <div className="btn-group">
        <button onClick={()=>dispatch(increase())} className="btn btn-primary my-2">Increase</button>
        <button onClick={()=>dispatch(decrease())} className="btn btn-danger my-2">Decrease</button>
        <button onClick={()=>dispatch(reset())} className="btn btn-success my-2">Reset</button>
      </div>
    </div>
  );
};
export default Counter;
