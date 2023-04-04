import React from "react";
import { useState, useEffect } from "react";
import "../styling/HighlightedStat.css";
import "../styling/HighlightedChart.css";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
const HighlightedChart = ({ info, title, stat }) => {
  const [pieData, setPieData] = useState([]);
  const colors = ["#740000", "#8b9fd4", "#c1de81"];
  useEffect(() => {
    if (stat.length > 0) {
      setPieData([
        { name: "Poorest 10%", value: parseFloat(stat[0].toFixed(3)) },
        { name: "Richest 10%", value: parseFloat(stat[9].toFixed(3)) },
        {
          name: "In between",
          value: parseFloat((1 - stat[0] - stat[9]).toFixed(3)),
        },
      ]);
    } else {
      setPieData([]);
    }
  }, [stat]);
  return (
    <div className={`chart highlighted-stat ${info}`}>
      {pieData.length > 0 ? (
        <ResponsiveContainer
          width="100%"
          height="100%"
          minWidth={200}
          minHeight={200}
        >
          <PieChart width="100%" height="100%">
            <Pie data={pieData} outerRadius={100}>
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index]}
                  strokeWidth={0}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <h3>{"None recorded"}</h3>
      )}
      <p>{title}</p>
    </div>
  );
};

export default HighlightedChart;
