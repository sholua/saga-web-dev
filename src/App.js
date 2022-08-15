import { useSelector, useDispatch } from "react-redux";
import { getNews } from "./redux/actions/actionCreator";
import News from "./components/news/news";
import "./index.css";

const App = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
  const { latestNewsError, popularNewsError } = useSelector(
    (store) => store?.errors || {}
  );
  const popularNews = useSelector((store) => store?.news?.popularNews || []);
  const dispatch = useDispatch();

  const handleNews = () => {
    dispatch(getNews());
  };

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <div className="container">
        <div className="container-item">
          <News news={latestNews} error={latestNewsError} title="Latest News" />
        </div>
        <div className="container-item">
          <News
            news={popularNews}
            error={popularNewsError}
            title="Popular News"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
