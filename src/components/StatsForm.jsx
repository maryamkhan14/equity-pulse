import React from "react";
import "../styling/StatsForm.css";
import { useState, useContext, useEffect } from "react";
import fetchCountryStats from "../utilities/fetchData";
import pairings from "../constants/countryPairings";
import { StatsContext } from "../context/StatsContext";
const StatsForm = () => {
  const [country, setCountry] = useState("");
  const [welfareMeasure, setWelfareMeasure] = useState("all");
  const { loading, dispatch } = useContext(StatsContext);

  useEffect(() => {
    updateDatasets();
  }, [country]);

  useEffect(() => {
    dispatch({ type: "FILTER_WELFARE_TYPE", payload: welfareMeasure });
  }, [welfareMeasure]);

  const updateDatasets = async () => {
    if (!loading) {
      let possibleMatches = Object.keys(pairings).filter((countryName) =>
        countryName.includes(country.toLocaleLowerCase())
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
      dispatch({ type: "FILTER_COUNTRY_NAME", payload: country });
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
      <div>
        <label htmlFor="welfare-measure">
          {loading ? "loading..." : "welfare measured by"}
        </label>
        <select
          name="welfare-measure"
          id="welfare-measure"
          onChange={(e) => setWelfareMeasure(e.target.value)}
          value={welfareMeasure}
        >
          <option value="all">no preference</option>
          <option value="income">income</option>
          <option value="consumption">consumption</option>
        </select>
      </div>
    </form>
  );
};

export default StatsForm;
