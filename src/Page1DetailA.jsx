import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  // const location = useLocation();
  // console.log(location)
  // Page1から、stateを受け取っていることが確認できる

  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
