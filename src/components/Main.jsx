import React from "react";
import "../styling/Main.css";
import AllStats from "./AllStats";
import SummaryStats from "./SummaryStats";
import { useContext, useEffect } from "react";
import fetchCountryStats from "../utilities/fetchData";
import { StatsContext } from "../context/StatsContext";

const Main = () => {
  const { dispatch, loading } = useContext(StatsContext);

  useEffect(() => {
    const initialFetch = async () => {
      let { data: highlighted } = await fetchCountryStats("USA");
      let { data: all } = await fetchCountryStats("all");
      dispatch({ type: "UPDATE_HIGHLIGHTED_DATASET", payload: highlighted[0] });
      dispatch({ type: "POPULATE_FULL_DATASET", payload: all });
    };
    initialFetch().then(() =>
      dispatch({ type: "TOGGLE_LOADING", payload: false })
    );
  }, []);

  return (
    <div className={`main ${loading && "loading"}`}>
      <SummaryStats />
      <AllStats />
    </div>
  );
};

export default Main;
