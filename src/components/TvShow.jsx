import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function TvShow() {
  document.title = "Movies-X | TV shows";
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTvShow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        setTv((prestate) => [...prestate, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("serach error", error);
    }
  };

  const refreshHandler = async function () {
    if (tv.length === 0) {
      getTvShow();
    } else {
      setPage(1);
      setTv([]);
      getTvShow();
    }
  };
  // console.log(trending);
  useEffect(() => {
    refreshHandler();
  }, [category]);

  const navigate = useNavigate();
  return tv.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className="text-3xl w-[10%] text-zinc-400 font-semibold flex items-center">
          <span
            className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
            onClick={() => navigate(-1)}
          >
            <IoArrowBack />
          </span>
          TV <small className="text-sm ml-3">({category})</small>
        </h1>
        <div className="flex w-[80%]  items-center  justify-between">
          <Topnav />
          <Dropdown
            title="category"
            options={["airing_today", "on_the_air", "popular", "top_rated"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        loader={<h4>Loading...</h4>}
        next={setTv}
        hasMore={hasMore}
      >
        <Cards data={tv} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default TvShow;
