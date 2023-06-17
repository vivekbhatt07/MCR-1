import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, Search } from "./Pages";

function App() {
  return (
    <div className="flex justify-center text-blue-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
