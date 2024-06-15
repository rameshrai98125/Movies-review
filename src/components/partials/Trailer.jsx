import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

function Trailer() {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const yvideos = useSelector((state) => state[category].info.videos);

  const navigate = useNavigate();

  return (
    <div className="absolute overflow-hidden z-10 bg-[rgba(0,0,0,0.9)] top-0 left-0 w-screen h-screen flex justify-center items-center">
      <Link
        className="px-2 z-20 absolute py-2 text-white text-5xl top-[5%] right-[5%] cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
        onClick={() => navigate(-1)}
      >
        <IoCloseSharp />
      </Link>
      {yvideos ? (
        <ReactPlayer
          height={500}
          width={920}
          controls={true}
          url={`https://www.youtube.com/watch?v=${yvideos.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Trailer;
