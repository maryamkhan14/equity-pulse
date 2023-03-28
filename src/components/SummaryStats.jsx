import React from "react";
import "../styling/SummaryStats.css";
import { useEffect, useContext, useState } from "react";
import { StatsContext } from "../context/StatsContext";
import HighlightedStat from "./HighlightedStat";
const SummaryStats = () => {
  const { highlightedDataset } = useContext(StatsContext);
  const [decileOneAvg, setDecileOneAvg] = useState(0);
  const [decileTenAvg, setDecileTenAvg] = useState(0);
  const [estTotal, setEstTotal] = useState(0);
  const [median, setMedian] = useState(0);

  useEffect(() => {
    let {
      decile1: decileOneShare,
      decile10: decileTenShare,
      median,
      mean,
      reporting_pop: population,
    } = highlightedDataset;
    setDecileOneAvg(
      calculateDecileAvg(decileOneShare, population, mean).toFixed(2)
    );
    setDecileTenAvg(
      calculateDecileAvg(decileTenShare, population, mean).toFixed(2)
    );
    setEstTotal(new Intl.NumberFormat().format(population * mean));
    setMedian(median);
  }, [highlightedDataset]);

  const calculateDecileAvg = (share, population, mean) => {
    return (population * mean * share) / (0.1 * population);
  };

  return (
    <div className="summary-stats">
      <HighlightedStat
        info="estimated-total"
        title="estimated total income/expenditure per day"
        stat={`$${estTotal}`}
      />
      <HighlightedStat
        info="decile-1-avg"
        title="mean income/expenditure per day within the poorest 10%"
        stat={`$${decileOneAvg}`}
      />
      <HighlightedStat
        info="decile-10-avg"
        title="mean income/expenditure per day within the richest 10%"
        stat={`$${decileTenAvg}`}
      />
      <HighlightedStat
        info="median"
        title="median income/expenditure per day"
        stat={`$${median}`}
      />
    </div>
  );
};

export default SummaryStats;
