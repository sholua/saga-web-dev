import { take } from "redux-saga/effects";
import { DECREASE_COUNT, INCREASE_COUNT } from "../constants";

export function* workerSaga() {}

export function* watchClickSaga() {
  yield take(INCREASE_COUNT);
  console.log("request 1");
  yield take(DECREASE_COUNT);
  console.log("request 2");
}

export default function* rootSaga() {
  yield watchClickSaga();
}
