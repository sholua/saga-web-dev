import { combineReducers } from "redux";
import news from "./news";
import errors from "./errors";
import loader from "./loader";

const reducer = combineReducers({
  news,
  errors,
  loader,
});

export default reducer;
