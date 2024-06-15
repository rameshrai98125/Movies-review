import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      // console.log(data.results);
      setSearches(data.results);
    } catch (error) {
      console.log("serach error", error);
    }
  };

  useEffect(() => {
    getSearch();
  }, [query]);
  return (
    <div className="w-full  hidden h-[10vh] z-20 relative md:flex justify-start pl-[20%] items-center">
      <span className="text-zinc-200 text-3xl">
        <FaSearch />
      </span>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        className="w-[50%] text-zinc-100 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        placeholder="search..."
      />

      {query.length > 0 && (
        <span
          onClick={() => setQuery("")}
          className="text-zinc-200 cursor-pointer text-3xl"
        >
          <IoMdClose />
        </span>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-500 absolute top-[100%] left-[20%] overflow-auto">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="flex  text-zinc-100 duration-300 hover:bg-zinc-100 hover:text-zinc-800 items-center justify-around gap-10 p-5  border-b-2 border-zinc-700"
          >
            <div>
              <img
                className="w-20 h-20 object-cover"
                src={
                  s.backdrop_path || s.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile.path
                      }`
                    : "https://th.bing.com/th/id/OIP.se6duPKpArNz0YnywnnYHQAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                }
                alt=""
              />
            </div>
            <div className="w-full">
              <span className="text-xl font-semibold">
                {s.original_title || s.name || s.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
