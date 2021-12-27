import { call, delay, put, fork, takeLatest, all } from "redux-saga/effects";
import { requestPayload, successPayload } from "../types";
import {
  incrementFail,
  incrementRequest,
  incrementSuccess,
} from "../reducers/post";

function requestIncrement(payload: requestPayload): successPayload {
  delay(1000);
  return { data: payload.data };
}

function* increment(action: { payload: requestPayload }) {
  try {
    const data: successPayload = yield call(requestIncrement, action.payload);
    yield put(incrementSuccess(data));
    yield;
  } catch (err: any) {
    yield put(incrementFail(err));
  }
}

function* watchPostRequest() {
  yield takeLatest(incrementRequest, increment);
}

export default function* post() {
  yield all([fork(watchPostRequest)]);
}
