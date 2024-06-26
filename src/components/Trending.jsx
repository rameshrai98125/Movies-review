import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prestate) => [...prestate, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("serach error", error);
    }
  };

  const refreshHandler = async function () {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };
  // console.log(trending);
  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  document.title = "Movies-X | Trending";

  const navigate = useNavigate();
  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className="text-4xl w-[10%] text-zinc-400 font-semibold flex items-center">
          <span
            className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
            onClick={() => navigate(-1)}
          >
            <IoArrowBack />
          </span>
          Trending
        </h1>
        <div className="flex w-[80%]  items-center  justify-between">
          <Topnav />
          <Dropdown
            title="category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        loader={<h4>Loading...</h4>}
        next={getTrending}
        hasMore={hasMore}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Trending;
