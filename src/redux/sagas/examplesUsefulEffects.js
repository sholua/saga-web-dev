import {
  apply,
  call,
  cancel,
  debounce,
  delay,
  fork,
  join,
  retry,
  spawn,
  throttle,
} from "redux-saga/effects";
import { getPopularNews } from "../../api";
import { GET_LATEST_NEWS } from "../constants";

function* delayExample() {
  yield delay(2000);
  console.log("test");
}

function* throttleExample() {
  yield throttle(5000, GET_LATEST_NEWS, () => console.log("test"));
}

function* debounceExample() {
  yield debounce(5000, GET_LATEST_NEWS, () => console.log("test"));
}

function* error() {
  console.log("test error");
  throw new Error("request error");
}

function* applyExample() {
  yield apply((test) => console.log(test), ["test"]);
}

function* loadTest() {
  const { hits } = yield call(getPopularNews);

  if (true) {
    cancel(getPopularNews); // all further actions will be cancelled
  }

  return hits;
}

export default function* rootSaga() {
  yield retry(5, 2000, error); // we will try five times to axecute the function
  yield spawn(delayExample);
  yield spawn(throttleExample);
  yield spawn(debounceExample);
  yield spawn(applyExample);

  const news = yield fork(loadTest);
  const [first] = yield join(news); // it blocks execution so we can get access to first element of news
  console.log(first);
}
