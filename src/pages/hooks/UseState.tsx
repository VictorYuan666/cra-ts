import React, { useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";

interface Param {
  page: number;
  keyword: string;
}

interface ListItem {
  title: string;
  id: string;
}

const api = "https://www.caoxingyu.club/guwen/selectbykeyword";

const SimpleHooks: React.FC = () => {
  const [person, setPerson] = useState({ name: "lucy", age: 1 });

  // 也可以如下
  // const [person, setPerson] = useState(() => {
  // const age = 1
  //   return { name: "lucy", age };
  // });
  const [count, setCount] = useState<number>(0);

  function setPersonFun() {
    // 同setState该方法是异步的
    setPerson({ name: "lucy", age: 2 });
    //只改变一个属性可以么？
    // setPerson({ age: 2 })
    // 如果为对象推荐写为解构覆盖属性的方式
    // setPerson({ ...person, age: 2 })
    // 下面这样可以么？
    // person.age = 2;
    // console.log(person)
    // setPerson(person);
    // 基础类型不需要写，复杂类型需要写
    // const [arr, setArr] = useState<number[]>([]);
  }

  // params并不是dom中这里为什么设置成一个对象？
  const [params] = useState<Param>({
    page: 1,
    keyword: ""
  });
  const [listData, setListData] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(false);

  function fetchListData() {
    setLoading(true);
    axios.get(api, { params }).then(res => {
      setListData(res.data.data);
      setLoading(false);
    });
  }
  // 我想进来就有默认数据怎么办？直接调用search('李白')可以么？需要useEffect
  function search(name: string) {
    params.keyword = name;
    fetchListData();
  }

  return (
    <>
      <h1>person: {JSON.stringify(person)}</h1>
      <Button type="primary" onClick={setPersonFun}>
        设置年龄为2
      </Button>
      <h1>count: {count}</h1>
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        增加
      </Button>
      <h1>示例古诗词搜索功能</h1>
      <Input.Search
        loading={loading}
        style={{ width: "300px" }}
        placeholder="请输入你要搜索的古诗词"
        onSearch={search}
      />
      {loading ? (
        <h1>加载中</h1>
      ) : (
        <ul>
          {listData.length > 0 ? (
            listData.map(item => <li key={item.id}>{item.title}</li>)
          ) : (
            <h1>空空如也</h1>
          )}
        </ul>
      )}
    </>
  );
};

export default SimpleHooks;
