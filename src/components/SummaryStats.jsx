import React from "react";
import "../styling/SummaryStats.css";
import { useEffect, useContext, useState } from "react";
import { StatsContext } from "../context/StatsContext";
import HighlightedStat from "./HighlightedStat";
import extractRelevantDetails from "../utilities/extractRelevantDetails";

const SummaryStats = () => {
  const { highlightedDataset } = useContext(StatsContext);
  const [decileOneAvg, setDecileOneAvg] = useState(0);
  const [decileTenAvg, setDecileTenAvg] = useState(0);
  const [estTotal, setEstTotal] = useState(0);
  const [median, setMedian] = useState(0);
  const [countryId, setCountryId] = useState([]);

  useEffect(() => {
    if (Object.keys(highlightedDataset).length > 0) {
      let {
        median,
        decileOneAvg,
        decileTenAvg,
        estTotal,
        country_code,
        country_name,
      } = extractRelevantDetails(highlightedDataset);
      setDecileOneAvg(decileOneAvg);
      setDecileTenAvg(decileTenAvg);
      setEstTotal(estTotal);
      setMedian(median);
      setCountryId([country_code, country_name]);
    }
  }, [highlightedDataset]);

  return (
    <div className="summary-stats">
      <HighlightedStat
        info="country-id"
        title="country"
        stat={`${countryId[0]} (${countryId[1]})`}
      />
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
