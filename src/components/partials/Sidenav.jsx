import React from "react";

import { FaTv } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";
import { RiMagicFill } from "react-icons/ri";
import { RiMovie2Fill } from "react-icons/ri";
import { BiTv } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoInformationCircleSharp } from "react-icons/io5";
import { MdOutlinePermContactCalendar } from "react-icons/md";

function Sidenav() {
  return (
    <>
      <div className="w-[20%] h-full border-r-[2px] border-zinc-700  p-10 ">
        <h1 className="text-2xl font-semibold text-purple-600 flex items-center gap-5 ">
          <FaTv />
          <span className="text-white">Movies-X</span>
        </h1>
        <div className="w-full h-[1.5px] bg-zinc-700 my-3"></div>
        <nav>
          <h1 className="text-2xl text-white mb-5">New Feeds</h1>
          <div className="links flex flex-col gap-5">
            <Link
              to={"/trending"}
              className="text-xl gap-3 flex items-center text-zinc-300 hover:bg-purple-600 rounded-lg px-3 duration-300 py-3"
            >
              <AiFillFire /> Trending
            </Link>
            <Link
              to={"/popular"}
              className="text-xl gap-3  flex items-center text-zinc-300  hover:bg-purple-600 rounded-lg px-3 duration-300 py-3"
            >
              <RiMagicFill /> popular
            </Link>
            <Link
              to={"movie"}
              className="text-xl gap-3  flex items-center text-zinc-300 hover:bg-purple-600 rounded-lg px-3 duration-300 py-3"
            >
              <RiMovie2Fill /> Movies
            </Link>
            <Link
              to={"tvshow"}
              className="text-xl gap-3  flex items-center text-zinc-300 hover:bg-purple-600 rounded-lg px-3 duration-300 py-3"
            >
              <BiTv /> Tv shows
            </Link>
            <Link
              to={"/people"}
              className="text-xl gap-3  flex items-center text-zinc-300 hover:bg-purple-600 rounded-lg px-3 duration-300 py-3"
            >
              <FaPeopleGroup /> people
            </Link>
          </div>
        </nav>
        <div className="w-full h-[1.5px] bg-zinc-700 my-3"></div>
        <nav>
          <h1 className="text-lg text-white mb-3">Website Information</h1>
          <div className="links flex flex-col gap-5">
            <Link className="text-xl gap-3 flex items-center text-zinc-300 hover:bg-purple-600 rounded-lg px-3 duration-300 py-3">
              <IoInformationCircleSharp /> About
            </Link>
            <Link className="text-xl gap-3 flex items-center text-zinc-300  hover:bg-purple-600 rounded-lg px-3 duration-300 py-3">
              <MdOutlinePermContactCalendar /> Contact
            </Link>{" "}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Sidenav;
