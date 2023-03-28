import React from "react";
import "../styling/SummaryStats.css";
import { useEffect, useContext } from "react";
import { StatsContext } from "../context/StatsContext";
const SummaryStats = () => {
  const { currentDataset } = useContext(StatsContext);

  return <div className="summary-stats">SummaryStats</div>;
};

export default SummaryStats;
