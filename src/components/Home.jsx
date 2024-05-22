import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";

function Home() {
  const [wallpaper, setWallpaper] = useState();
  const [trending, setTredning] = useState(null);

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);

      let randonData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randonData);
    } catch (error) {
      console.log("serach error", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      console.log(data.results);
      setTredning(data.results);
    } catch (error) {
      console.log("serach error", error);
    }
  };
  useEffect(() => {
    !wallpaper && getWallpaper();

    !trending && getTrending();
  }, []);
  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    "Loading...."
  );
}

export default Home;
