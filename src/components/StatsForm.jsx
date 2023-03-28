import React from "react";
import "../styling/StatsForm.css";
import { useState, useContext, useEffect } from "react";
import fetchCountryStats from "../utilities/fetchData";
import isValidCode from "../utilities/validateCountry";
import { StatsContext } from "../context/StatsContext";
const StatsForm = () => {
  const [country, setCountry] = useState("");
  const { loading, dispatch } = useContext(StatsContext);
  useEffect(() => {
    updateDatasets();
  }, [country]);
  const updateDatasets = async () => {
    if (isValidCode(country)) {
      let { data: highlighted } = await fetchCountryStats(country);
      dispatch({ type: "UPDATE_HIGHLIGHTED_DATASET", payload: highlighted[0] });
      dispatch({ type: "FILTER_DISPLAY_DATASET", payload: country });
    } else {
      dispatch({ type: "RESET_FILTER", payload: null });
    }
  };
  return (
    <form className="stats-form">
      <div>
        <label htmlFor="search-country">search country</label>
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
