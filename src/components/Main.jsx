import React from "react";
import "../styling/Main.css";
import AllStats from "./AllStats";
import SummaryStatsView from "./SummaryStatsView";
import { useContext, useEffect } from "react";
import fetchCountryStats from "../utilities/fetchData";
import { StatsContext } from "../context/StatsContext";

const Main = () => {
  const { dispatch, loading } = useContext(StatsContext);

  useEffect(() => {
    const initialFetch = async () => {
      let all = await fetchCountryStats("all");
      await dispatch({
        type: "POPULATE_DISPLAY_ORIGINAL_DATASETS",
        payload: all,
      });

      //dispatch({ type: "UPDATE_HIGHLIGHTED_DATASET", payload: "USA" });
    };
    initialFetch().then(() =>
      dispatch({ type: "TOGGLE_LOADING", payload: false })
    );
  }, []);

  return (
    <div className={`main ${loading && "loading"}`}>
      <AllStats />
    </div>
  );
};

export default Main;
