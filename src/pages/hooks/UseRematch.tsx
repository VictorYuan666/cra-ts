import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { iRootState, Dispatch } from "../../store";

const UseRematch: React.FC = () => {
  const dolphins = useSelector((state: iRootState) => state.dolphins);
  const dispatch = useDispatch<Dispatch>();
  return (
    <div className="page-home all_nowarp">
      <h1>{dolphins}</h1>
      <button onClick={dispatch.dolphins.increment}>+1</button>
    </div>
  );
};

export default UseRematch;
