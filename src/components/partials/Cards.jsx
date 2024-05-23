import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap w-full justify-center mt-[5%] px-[5%]">
      {data.map((card, i) => (
        <Link className="w-[30vh]  mr-[5%] mb-[5%]" key={i}>
          <img
            className="w-full shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.poster_path || card.backdrop_path
            }`}
            alt=""
          />
          <h1 className="text-xl text-zinc-200 mt-3 font-semibold">
            {card.title ||
              card.name ||
              card.original_name ||
              card.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
