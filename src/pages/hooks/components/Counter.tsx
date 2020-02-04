import React, { useState, useEffect } from "react";
import { Button } from "antd";

interface Props {
  value: number;
  onChange: (num: number) => any;
}

export default function Counter({ value, onChange }: Props) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    value && setCount(value);
  }, [value]);

  return (
    <>
      <div>{count}</div>,
      <Button
        type="primary"
        onClick={() => {
          const newCount = count + 1;
          setCount(newCount);
          onChange(newCount);
        }}
      >
        点击+1
      </Button>
    </>
  );
}
