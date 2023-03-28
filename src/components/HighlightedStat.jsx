import React from "react";
import "../styling/HighlightedStat.css";
const HighlightedStat = ({ title, stat }) => {
  return (
    <div className="highlighted-stat">
      <h3>{title}</h3>
      <p>{stat && stat}</p>
    </div>
  );
};

export default HighlightedStat;
