import React from "react";
import "../styling/AllStats.css";
import StatsForm from "./StatsForm";
import StatsList from "./StatsList";
const AllStats = () => {
  return (
    <div className="all-stats">
      <StatsForm />
      <StatsList />
    </div>
  );
};

export default AllStats;
