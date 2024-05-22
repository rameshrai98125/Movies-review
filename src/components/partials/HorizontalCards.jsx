import React from "react";
import { Link } from "react-router-dom";

function HorizontalCards({ data }) {
  return (
    <div className="w-full h-[45%] p-5=">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>
        <div className="dropdown"></div>
      </div>
      <div className="w-full h-[100%] flex overflow-y-hidden">
        {data.map((data, i) => (
          <div
            key={i}
            className="min-w-[15%] h-full mr-5 mb-5 bg-zinc-900  rounded-md"
          >
            <div className="w-full h-[50%]">
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  data.backdrop_path || data.poster_path
                }`}
                alt=""
              />
            </div>
            <div className="p-2 h-[55%]">
              <h1 className="text-xl mt-3 font-semibold text-zinc-100 ">
                {data.title ||
                  data.name ||
                  data.original_name ||
                  data.original_title}
              </h1>
              <p className="text-zinc-100 w-full text-sm">
                {data.overview.slice(0, 50)}...
                <span className="text-zinc-300">more</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
