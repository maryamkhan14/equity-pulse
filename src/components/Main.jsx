import React from "react";
import "../styling/Main.css";
import AllStats from "./AllStats";
import SummaryStats from "./SummaryStats";
import { useContext, useEffect } from "react";
import axios from "axios";
import defaultPovertyQueryParams from "../utilities/defaultPovertyQueryParams";
import { StatsContext } from "../context/StatsContext";

const Main = () => {
  const { dispatch } = useContext(StatsContext);
  const fetchInitial = async () => {
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
  useEffect(() => {
    const initialFetch = async () => {
      let { data } = await fetchInitial();
      console.log(...data);
    };
    initialFetch();
  }, []);
  return (
    <div className="main">
      <SummaryStats />
      <AllStats />
    </div>
  );
};

export default Main;
