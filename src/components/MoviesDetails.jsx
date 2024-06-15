import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynloadmovie, removemovie } from "../Store/actions/movieAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { FcWikipedia } from "react-icons/fc";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { FaImdb } from "react-icons/fa";
import Loading from "./Loading";
import { IoIosPlay } from "react-icons/io";
import HorizontalCards from "./partials/HorizontalCards";

function MoviesDetails() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asynloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background:
          info.detail && info.detail.backdrop_path
            ? `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`
            : "",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen relative min-h-[150vh] overflow-y-hidden px-[10%]"
    >
      <nav className="w-full h-[10vh] items-center flex gap-10 text-2xl text-zinc-200">
        <span
          className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </span>
        <a
          href={info.detail.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
        >
          <LiaExternalLinkAltSolid />
        </a>
        <a
          href={`https://en.wikipedia.org/wiki/${info.detail.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
        >
          <FcWikipedia />
        </a>
        <a
          href={`https://www.imdb.com/title/${info.detail.imdb_id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
        >
          <FaImdb />
        </a>
      </nav>
      {/* .part 1 poster and details  */}
      <div className="w-full flex">
        <img
          className="w-60 shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.profile_path || info.detail.poster_path
          }`}
          alt=""
        />
        <div className="content ml-[5%]">
          <h1 className="text-white text-5xl font-black ">
            {info.detail.title ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <span className="text-xl ml-2 font-bold text-zinc-300">
              ({info.detail.release_date.split("-")[0]})
            </span>
          </h1>

          <div className="flex items-center text-white gap-x-5 mt-2 mb-2">
            <div className="bg-yellow-500 rounded-full text-zinc-200 text-xl w-[6vh] h-[6vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
            <h1 className="font-semibold text-xl w-[60px] leading-">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>

          <h1 className="text-white text-2xl font-black  italic">
            {info.detail.tagline}
          </h1>

          <h1 className="text-white text-xl mt-1">Overview</h1>
          <p className="text-white  mt-3">{info.detail.overview}</p>

          <h1 className="text-white text-xl mt-1 mb-2">Movie Translated</h1>
          <p className="text-white">{info.translation.join(", ")}</p>
          <span className="inline-block mt-2">
            <Link
              className="bg-purple-700 flex items-center hover:bg-purple-600 duration-200 py-3 px-8 text-lg  text-zinc-100 rounded-md"
              to={`${pathname}/trailer`}
            >
              <IoIosPlay />
              Play Trailer
            </Link>
          </span>
        </div>
      </div>

      {/* part 3  */}
      <div className="w-[60%] flex flex-col gap-y-3 mt-3">
        {info.watchprovider && info.watchprovider.flatrate && (
          <div className="flex items-center gap-x-3 my-2">
            <h1 className="text-white">Available on Platforms</h1>
            {info.watchprovider.flatrate.map((w, i) => (
              <img
                key={i}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchprovider && info.watchprovider.rent && (
          <div className="flex items-center gap-x-4 my-5">
            <h1 className="text-white">Available on Rent</h1>
            {info.watchprovider.rent.map((w, i) => (
              <img
                key={i}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
        {info.watchprovider && info.watchprovider.buy && (
          <div className="flex items-center gap-x-4">
            <h1 className="text-white">Available to Buy</h1>
            {info.watchprovider.buy.map((w, i) => (
              <img
                key={i}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* part 4  recommendations and similar*/}
      <hr className=" mt-10 mb-5 border-none h-[1px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">
        Recommendations & Similar
      </h1>

      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
}

export default MoviesDetails;
