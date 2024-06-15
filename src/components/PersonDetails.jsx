import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynloadperson, removeperson } from "../Store/actions/personAction";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import { FaInstagramSquare } from "react-icons/fa";
import { FcWikipedia } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { FaTwitterSquare } from "react-icons/fa";
import Dropdown from "./partials/Dropdown";

function PersonDetails() {
  const { pathname } = useLocation();
  const [category, setcategory] = useState("movie");
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  console.log(info);
  const dispatch = useDispatch();
  ``;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asynloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [dispatch, id]);

  return info ? (
    <div className="w-screen bg-zinc-900 min-h-[200vh] px-[10%] ">
      {/* nav  */}
      <nav className="w-full h-[10vh] items-center flex gap-10 text-2xl text-zinc-200">
        <span
          className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
          onClick={() => navigate(-1)}
        >
          <IoArrowBack />
        </span>
        {/*   */}
      </nav>

      <div className="w-full flex gap-20">
        <div className="w-[20%]">
          <img
            className="w-60 shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className=" mt-10 mb-5 border-none h-[1px] bg-zinc-500" />
          {/* links  */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              href={`https://en.wikipedia.org/wiki/${info.detail.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
            >
              <FcWikipedia />
            </a>

            {info.externalid.facebook_id ? (
              <a
                href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
              >
                <FaFacebookSquare />
              </a>
            ) : (
              <a
                href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
              >
                <FaInstagramSquare />
              </a>
            )}
            <a
              href={`https://x.com/${info.externalid.twitter_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 cursor-pointer rounded-full hover:bg-zinc-600 duration-300"
            >
              <FaTwitterSquare />
            </a>
          </div>
          {/* perosnal info  */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-3">
            Person Info
          </h1>
          {/* know  */}
          <h1 className=" text-zinc-400  ">Know for</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.known_for_department}
          </h1>
          {/* gender */}
          <h1 className=" text-zinc-400  mt-2">Gender</h1>
          <h1 className=" text-zinc-400 ">
            {info.detail.dender === 2 ? "male" : "female"}
          </h1>
          {/* Birthday */}
          <h1 className=" text-zinc-400  mt-2">Birthday</h1>
          <h1 className=" text-zinc-400 ">{info.detail.birthday}</h1>
        </div>

        {/* .part 3  */}
        <div className="w-[80%]">
          <h1 className="text-6xl text-zinc-400 font-black my-3">
            {info.detail.name}
          </h1>
          {/* know  */}
          <h1 className=" text-zinc-400 text-xl font-semibold">Biography</h1>
          <p className="text-zinc-100 my-2 ">{info.detail.biography}</p>

          <h1 className="text-zinc-400 text-xl font-semi">Know For</h1>

          <HorizontalCards data={info.combinedCredits.cast} />
          <div className="w-full flex justify-between">
            <h1 className="text-zinc-400 text-xl font-semi">Acting</h1>
            <Dropdown
              title={"category"}
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className="w-full list-disc text-zinc-400 h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.3)] border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white duration-300 mt-5 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                    {c.title || c.title || c.original_name || c.original_title}
                  </span>
                  <span className="block"> {c.character} </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default PersonDetails;
