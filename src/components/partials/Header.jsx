import React from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { FaTape } from "react-icons/fa";

function Header({ data }) {
  // console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.7),rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start md:px-20 px-2 py-10"
    >
      <h1 className=" w-[70%] text-5xl font-black text-zinc-100">
        {data.title || data.name || data.original_name || data.original_title}
      </h1>
      <p className="text-zinc-100 w-[70%]">
        {data.overview.slice(0, 200)}...{" "}
        <Link
          to={`/${data.media_type || title}/details/${data.id}`}
          className="text-blue-600"
        >
          more
        </Link>
        {""}
      </p>
      <div>
        {" "}
        <p className="text-white flex items-center  uppercase gap-5 mt-5 text-xl">
          {data.release_date && (
            <>
              <span className="text-purple-700 text-xl font-semibold">
                <HiSpeakerphone />
              </span>
              {data.release_date}
            </>
          )}

          <span className="text-purple-700 text-xl font-semibold">
            <FaTape />
          </span>
          {data.media_type}
        </p>
      </div>

      <Link
        className="bg-purple-700 hover:bg-purple-600 duration-200  p-3 mt-3 text-xl font-semibold text-zinc-100 rounded-md "
        to={`/${data.media_type}/details/${data.id}/trailer`}
      >
        Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
