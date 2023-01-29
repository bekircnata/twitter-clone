import "./App.scss";
import RouterConfig from "./RouterConfig";

import Menu from "./components/menu/Menu";
import Sidebar from "./components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [tweetList, setTweetList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/" && getTweetList();
  }, []);

  // Dummy data olarak hazırladığım tweet listesi
  const getTweetList = () => {
    let tweetListArr = require("./data/tweets.json");
    setTweetList(tweetListArr);
  };

  return (
    <div style={{ padding: "0 100px" }}>
      <div className="grid">
        <div className="lg:col-3">
          <Menu tweetList={tweetList} setTweetList={setTweetList} />
        </div>
        <div className="lg:col-5" style={{ color: "#fff" }}>
          <RouterConfig tweetList={tweetList} setTweetList={setTweetList} />
        </div>
        <div className="lg:col-4" style={{ color: "#fff" }}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
