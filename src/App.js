import { useSelector, useDispatch } from "react-redux";
import { getNews } from "./redux/actions/actionCreator";
import News from "./components/news/news";
import "./index.css";

const App = () => {
  const latestNews = useSelector((store) => store?.news?.latestNews || []);
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
          <News news={latestNews} title="Latest News" />
        </div>
        <div className="container-item">
          <News news={popularNews} title="Popular News" />
        </div>
      </div>
    </div>
  );
};

export default App;
