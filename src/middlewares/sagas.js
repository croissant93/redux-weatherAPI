import { call, delay } from "@redux-saga/core/effects";
import { put, takeEvery, all, takeLatest } from "redux-saga/effects";
import plusAsync from "../modules/addNumber";
import { useSelector } from "react-redux";

export function* timerStart() {
  console.log("START!");
  while (true) {
    yield delay(1000);
    yield put({ type: "timer/START" });
  }
}

export function* rootSaga() {
  yield takeLatest("timer/TIMER", timerStart);
  //가장 최신주문 마다 원하는 동작을 넣고자 할때 많이 이용된다.
  // yield all([helloSaga(), counterSaga(), GoodbyeSaga()]);
}

//
