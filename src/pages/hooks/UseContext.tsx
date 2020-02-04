import React, { createContext, useContext, useState } from "react";
import { Button } from "antd";
const CountContext = createContext(0);

const UseContext: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>UseContext</h1> 
      <Button type="primary" onClick={()=>{setCount(count+1)}}>+1</Button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </div>
  );
};

const Child: React.FC = () => {
  const count = useContext(CountContext);
  return <h2>{count}</h2>;
};

export default UseContext;
