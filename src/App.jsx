import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, About } from "./Pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
