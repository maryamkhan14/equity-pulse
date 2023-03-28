import React from "react";
import "../styling/HighlightedStat.css";
const HighlightedStat = ({ info, title, stat }) => {
  return (
    <div className={`highlighted-stat ${info}`}>
      <h3>{stat && stat}</h3>
      <p>{title}</p>
    </div>
  );
};

export default HighlightedStat;
