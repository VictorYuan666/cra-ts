import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";

function useList(initialUrl: string, initialParams: any) {
  const [list, setList] = useState();
  const [params, setParams] = useState(initialParams);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      if (!loading) {
        return;
      }

      try {
        const result = await axios({
          url: initialUrl,
          params
        });

        setList(result.data);
      } catch (error) {
        setIsError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, [params, initialUrl, loading]);

  return {
    list,
    loading,
    setLoading,
    isError,
    setParams
  };
}

const CustomHooks: React.FC = () => {
  // 逻辑与视图的分离更有利于复用
  const { list, loading, setLoading } = useList(
    "http://douban.uieee.com/v2/movie/new_movies",
    {}
  );

  return (
    <div>
      <h1>最近热映电影</h1>
      <Button loading={loading} onClick={() => setLoading(true)}>
        刷新
      </Button>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <ul>
          {list &&
            list.subjects.map((item: any) => {
              return <li>{item.title}</li>;
            })}
        </ul>
      )}
    </div>
  );
};

export default CustomHooks;
