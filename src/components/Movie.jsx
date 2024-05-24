import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

function Movie() {
  document.title = "Movies-X | Movies";
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prestate) => [...prestate, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("serach error", error);
    }
  };

  const refreshHandler = async function () {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };
  // console.log(trending);
  useEffect(() => {
    refreshHandler();
  }, [category]);

  const navigate = useNavigate();
  return movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full px-[5%] flex items-center justify-between">
        <h1 className="text-3xl w-[10%] text-zinc-400 font-semibold flex items-center">
          <span
            className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
            onClick={() => navigate(-1)}
          >
            <IoArrowBack />
          </span>
          Movie <small className="text-sm ml-3">({category})</small>
        </h1>
        <div className="flex w-[80%]  items-center  justify-between">
          <Topnav />
          <Dropdown
            title="category"
            options={["popular", "to_rated", "upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        loader={<h4>Loading...</h4>}
        next={setMovie}
        hasMore={hasMore}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie;
