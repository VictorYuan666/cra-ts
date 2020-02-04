import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";
import Counter from "./components/Counter";

interface ListItem {
  title: string;
}
const api = "http://douban.uieee.com/v2/movie/new_movies";

const UseEffect: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000); // 如果没有第二个参数会发生什么
    console.log("effect:", timer);
    // 每次副作用执行，都会返回一个新的clear函数
    // clear函数会在下一次副作用逻辑之前执行（DOM渲染完成之后）
    // 组件销毁也会执行一次
    return () => {
      console.log("clear:", timer);
      clearTimeout(timer);
    };
  }, [count]);
  console.log("before render");

  const [list, setList] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(true);

  // DOM渲染完成之后副作用执行
  useEffect(() => {
    if (loading) {
      axios.get(api).then(res => {
        setList(res.data.subjects);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <div>
      <h1>{count}</h1>
      
      <Counter value={20} onChange={(num: number) => console.log(num)} />
      
      <h1>最近热映电影</h1>
      <Button loading={loading} onClick={() => setLoading(true)}>
        刷新
      </Button>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <ul>
          {list.map(item => {
            return <li>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default UseEffect;
