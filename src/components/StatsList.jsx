import React from "react";
import { useContext } from "react";
import { StatsContext } from "../context/StatsContext";
import extractRelevantStats from "../utilities/extractRelevantStats";
import "../styling/StatsList.css";
const StatsList = () => {
  const { fullDataset } = useContext(StatsContext);

  return (
    <div className="stats-list">
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Median</th>
            <th>Income/Consumption in Poorest 10%</th>
            <th>Income/Consumption in Richest 10%</th>
            <th>Estimated Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(fullDataset).length > 0 &&
            fullDataset.map((individualDataset) => {
              let { country_name, country_code } = individualDataset;
              let { median, decileOneAvg, decileTenAvg, estTotal } =
                extractRelevantStats(individualDataset);
              return (
                <tr key={country_code}>
                  <td>{country_name}</td>
                  <td>{median}</td>
                  <td>{decileOneAvg}</td>
                  <td>{decileTenAvg}</td>
                  <td>{estTotal}</td>
                </tr>
              );
            })}
          <tr>
            {Object.keys(fullDataset).length == 0 && <td>No data yet!</td>}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatsList;
