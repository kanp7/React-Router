import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  // hash形式でパラメーターなどが返る
  // const location = useLocation();
  // console.log(location)

  // 分割代入でlocationのhashから直接searchの値を取り出す
  const { search } = useLocation();
  // console.log(search);
  // ?name=hogehoge ?以降のクエリの値が取得できる

  const query = new URLSearchParams(search);
  // console.log(query)
  // queryに対して、メソッドが使用できるようになる

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
