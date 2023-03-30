import React from "react";
import "../styling/StatsForm.css";
import { useState, useContext, useEffect } from "react";
import fetchCountryStats from "../utilities/fetchData";
import pairings from "../constants/countryPairings";
import { StatsContext } from "../context/StatsContext";
const StatsForm = () => {
  const [country, setCountry] = useState("");
  const { loading, dispatch } = useContext(StatsContext);

  useEffect(() => {
    updateDatasets();
  }, [country]);
  const updateDatasets = async () => {
    if (!loading) {
      let possibleMatches = Object.keys(pairings).filter((countryName) =>
        countryName.includes(country)
      );
      if (pairings[country] || possibleMatches.length == 1) {
        dispatch({
          type: "TOGGLE_LOADING",
          payload: true,
        });
        dispatch({
          type: "UPDATE_HIGHLIGHTED_DATASET",
          payload: pairings[possibleMatches[0]],
        });
      }
      dispatch({ type: "FILTER_DISPLAY_DATASET", payload: country });
    }
  };
  return (
    <form className="stats-form">
      <div>
        <label htmlFor="search-country">
          {loading ? "loading..." : "search country"}
        </label>
        <input
          type="text"
          htmlFor="search-country"
          disabled={loading}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
    </form>
  );
};

export default StatsForm;
