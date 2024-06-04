import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap w-full justify-center pt-[5%] px-[5%] bg-zinc-900">
      {data.map((card, i) => (
        <Link
          to={`/${data.media_type || title}/details/${card.id}`}
          className="relative  w-[30vh]  mr-[5%] mb-[5%]"
          key={i}
        >
          <img
            className="w-full shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.profile_path || card.poster_path || card.backdrop_path
            }`}
            alt=""
          />
          <h1 className="text-xl text-zinc-200 mt-3 font-semibold">
            {card.title ||
              card.name ||
              card.original_name ||
              card.original_title}
          </h1>

          {card.vote_average && (
            <div className="bg-yellow-500  absolute -right-5 bottom-[25%] rounded-full text-zinc-200 text-xl w-[6vh] h-[6vh] flex justify-center items-center">
              {" "}
              {(card.vote_average * 10).toFixed()}
              <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default Cards;
