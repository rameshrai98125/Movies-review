import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShow from "./components/TvShow";
import People from "./components/People";

function App() {
  return (
    <div className="w-screen h-screen bg-zinc-800 flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
