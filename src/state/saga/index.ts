import { fork, all } from "redux-saga/effects";
import post from "./post";

export default function* sagaRoot() {
  yield all([fork(post)]);
}
