import React, { useState, useMemo, useCallback } from "react";
import { Button } from "antd";

// useCallback返回一个 memoized 回调函数 useMemo返回一个 memoized 值
// seCallback(fn, deps) 相当于 useMemo(() => fn, deps)
const UseCallback: React.FC = () => {
  const [target, setTarget] = useState(0);
  const [other, setOther] = useState(0);

  const sum = useMemo(() => {
    console.log("重新计算一次");
    let _sum = 0;
    for (let i = 1; i <= target; i++) {
      _sum += i;
    }
    return _sum;
  }, [target]);

  const inputChange = useCallback(e => {
    console.log(e.target.value);
  }, []);

  return (
    <div style={{ width: "200px", margin: "auto" }}>
      <input type="text" onChange={inputChange} />
      <p>value:{target}</p>
      <p>sum:{sum}</p>
      <Button onClick={() => setTarget(target + 1)}>递增</Button>
      <Button onClick={() => setTarget(target - 1)}>递减</Button>

      <div style={{ width: "80px", margin: "100px auto", fontSize: "20px" }}>
        干扰项 {other}
      </div>
      <Button onClick={() => setOther(other + 1)}>递增</Button>
      <Button onClick={() => setOther(other - 1)}>递减</Button>
    </div>
  );
};

export default UseCallback;
