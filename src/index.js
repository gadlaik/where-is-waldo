import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Leaderboard from "./components/Leaderboard";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="level1" element={<Level1 />} />
        <Route path="level2" element={<Level2 />} />
        <Route path="level3" element={<Level3 />} />
        <Route path="leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
