import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // Array.keys() で配列のインデックスが入った Array Iterator Object を取得できる
  // ...のスプレッド構文で配列に変換
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      {/* detailAにarrを渡すため、 stateを設定する */}
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
