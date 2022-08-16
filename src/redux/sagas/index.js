import {
  takeEvery,
  put,
  call,
  fork,
  all,
  race,
  spawn,
  takeLatest,
  takeLeading,
} from "redux-saga/effects";
import {
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
  SET_LOADING_DATA,
} from "../constants";
import { setLatestNews, setPopularNews } from "../actions/actionCreator";
import { getLatestNews, getPopularNews } from "../../api/index";

export function* handleLatestNews() {
  try {
    yield put({ type: SET_LOADING_DATA, payload: true });
    const { hits } = yield call(getLatestNews, "react");
    yield put(setLatestNews(hits));
    yield put({ type: SET_LOADING_DATA, payload: false });
  } catch {
    yield put({ type: SET_LOADING_DATA, payload: false });
    yield put({
      type: SET_LATEST_NEWS_ERROR,
      payload: "Error fetching latest news",
    });
  }
}

export function* handlePopularNews() {
  try {
    yield put({ type: SET_LOADING_DATA, payload: true });
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
    yield put({ type: SET_LOADING_DATA, payload: false });
  } catch {
    yield put({ type: SET_LOADING_DATA, payload: false });
    yield put({
      type: SET_POPULAR_NEWS_ERROR,
      payload: "Error fetching popular news",
    });
  }
}

// export function* handleNews() {
//   // yield spawn(handleLatestNews);
//   // yield spawn(handlePopularNews);
//   yield fork(handleLatestNews);
//   yield fork(handlePopularNews);
//   // yield all([call(handleLatestNews), call(handlePopularNews)]);
//   // yield race([call(handleLatestNews), call(handlePopularNews)]);
// }

export function* watchPopularSaga() {
  yield takeLatest(GET_POPULAR_NEWS, handlePopularNews);
}

export function* watchLatestSaga() {
  yield takeLatest(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield all([fork(watchPopularSaga), fork(watchLatestSaga)]);
}
