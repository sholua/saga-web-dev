import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./pages/home/home";
import LatestNews from "./pages/latest-news/latest-news";
import PopularNews from "./pages/popular-news/popular-news";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";

const history = createBrowserHistory();

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/latest-news" element={<LatestNews />} />
            <Route path="/popular-news" element={<PopularNews />} />
          </Routes>
        </App>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
