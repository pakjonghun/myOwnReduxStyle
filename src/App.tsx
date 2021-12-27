import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootReducerType } from "./state/reducers";
import { incrementRequest } from "./state/reducers/post";

function App() {
  const dispatch = useDispatch();
  const onClick = (number: number) => {
    dispatch(incrementRequest({ data: number }));
  };

  const data = useSelector<rootReducerType, number>((state) => state.post.data);
  console.log(data);

  return <div onClick={() => onClick(1)}>ii</div>;
}

export default App;
