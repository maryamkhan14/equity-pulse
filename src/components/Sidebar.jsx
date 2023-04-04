import React from "react";
import "../styling/Sidebar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
const Sidebar = () => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <div className="sidebar">
      <h1>Equity Pulse</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <p onClick={() => setShowAbout(!showAbout)}>About</p>
      </div>
      {showAbout && <About />}
    </div>
  );
};

export default Sidebar;
