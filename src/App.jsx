import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShow from "./components/TvShow";
import People from "./components/People";
import MoviesDetails from "./components/MoviesDetails";
import PersonDetails from "./components/PersonDetails";
import TvDetails from "./components/TvDetails";
import Trailer from "./components/partials/Trailer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="w-screen h-screen bg-zinc-800 flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MoviesDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
