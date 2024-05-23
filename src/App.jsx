import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="w-screen h-screen bg-zinc-800 flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
