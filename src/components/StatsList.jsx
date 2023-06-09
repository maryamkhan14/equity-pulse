import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StatsContext } from "../context/StatsContext";
import extractRelevantDetails from "../utilities/extractRelevantDetails";
import "../styling/StatsList.css";
const StatsList = () => {
  const { displayDataset } = useContext(StatsContext);

  return (
    <div className="stats-list">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Median</th>
            <th>Daily Income/Expenditure (Poorest 10%)</th>
            <th>Daily Income/Expenditure (Richest 10%)</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(displayDataset).length > 0 &&
            displayDataset.map((individualDataset) => {
              let {
                median,
                decileOneAvg,
                decileTenAvg,
                country_name,
                country_code,
              } = extractRelevantDetails(individualDataset);
              return (
                <tr key={country_code}>
                  <td>
                    <b>
                      <Link to={`/countryDetails/${country_code}`}>
                        {country_name}
                      </Link>
                    </b>
                  </td>
                  <td>${median}</td>
                  <td>${decileOneAvg}</td>
                  <td>${decileTenAvg}</td>
                </tr>
              );
            })}

          {Object.keys(displayDataset).length == 0 && (
            <tr>
              <td colSpan={4}>No data yet!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StatsList;
