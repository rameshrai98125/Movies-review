import React, { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

function Home() {
  document.title = "Movie-X | home";
  const [wallpaper, setWallpaper] = useState();
  const [trending, setTredning] = useState(null);
  const [category, setCategory] = useState("all");

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
      const { data } = await axios.get(`/trending/${category}/day`);
      // console.log(data.results);
      setTredning(data.results);
    } catch (error) {
      console.log("serach error", error);
    }
  };
  useEffect(() => {
    !wallpaper && getWallpaper();
    getTrending();
  }, [category]);

  return wallpaper && trending ? (
    <>
      <Sidenav />
      <div className="w-[80%] min-h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={wallpaper} />
        {/* dropdown  */}
        <div className="mb-5 flex justify-between items-center p-5">
          <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>
          <div className="mt-5">
            <Dropdown
              title="filter"
              options={["tv", "movie", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
