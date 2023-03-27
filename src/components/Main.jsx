import React from "react";
import "../styling/Main.css";
import AllStats from "./AllStats";
import SummaryStats from "./SummaryStats";
const Main = () => {
  return (
    <div className="main">
      <SummaryStats />
      <AllStats />
    </div>
  );
};

export default Main;
