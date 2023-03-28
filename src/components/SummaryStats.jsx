import React from "react";
import "../styling/SummaryStats.css";
import { useEffect, useContext } from "react";
import { StatsContext } from "../context/StatsContext";
const SummaryStats = () => {
  const { loading } = useContext(StatsContext);

  return <div className="summary-stats">{loading && "loading"}Summary</div>;
};

export default SummaryStats;
