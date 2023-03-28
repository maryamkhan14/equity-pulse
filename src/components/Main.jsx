import React from "react";
import "../styling/Main.css";
import AllStats from "./AllStats";
import SummaryStats from "./SummaryStats";
import { useContext, useEffect } from "react";
import axios from "axios";
import defaultPovertyQueryParams from "../utilities/defaultPovertyQueryParams";
import { StatsContext } from "../context/StatsContext";

const Main = () => {
  const { dispatch, highlightedDataset, fullDataset, loading } =
    useContext(StatsContext);
  const fetchInitialHighlighted = async () => {
    let usaStats = await axios({
      method: "GET",
      url: `
    https://api.worldbank.org/pip/v1/pip?country=USA${defaultPovertyQueryParams}`,
      headers: {
        Accept: "*/*",
      },
    });
    return usaStats;
  };
  const fetchInitialAll = async () => {
    let allStats = await axios({
      method: "GET",
      url: `
    https://api.worldbank.org/pip/v1/pip?country=all${defaultPovertyQueryParams}`,
      headers: {
        Accept: "*/*",
      },
    });
    return allStats;
  };
  useEffect(() => {
    const initialFetch = async () => {
      let { data: highlighted } = await fetchInitialHighlighted();
      let { data: all } = await fetchInitialAll();
      dispatch({ type: "UPDATE_HIGHLIGHTED_DATASET", payload: highlighted[0] });
      dispatch({ type: "POPULATE_FULL_DATASET", payload: all[0] });
    };
    initialFetch();
  }, []);

  useEffect(() => {
    dispatch({ type: "TOGGLE_LOADING", payload: null });
  }, [fullDataset]);

  return (
    <div className={`main ${loading && "loading"}`}>
      <SummaryStats />
      <AllStats />
    </div>
  );
};

export default Main;
