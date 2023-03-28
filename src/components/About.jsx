import React from "react";
import "../styling/About.css";
const About = () => {
  return (
    <div className="about">
      <h4>What is this?</h4>
      <p>
        This is a tool for analyzing poverty and income statistics relevant to
        several countries.
      </p>
      <h4>What poverty line and reporting level was used?</h4>
      <p>
        By default, the poverty line of $1.90 is used and the reporting level is
        national. This will be adjustable in future updates.
      </p>
      <h4>How was this data sourced?</h4>
      <p>
        The World Bank sourced this data from several surveys. For countries
        that didn't have surveys, data was interpolated. Future updates will
        discern countries whose data was interpolated from countries whose data
        was surveyed.
      </p>
      <h4>How recent is this data?</h4>
      <p>This data is sourced from 2019.</p>
      <p>
        Credits belong to{" "}
        <a href="https://pip.worldbank.org/api" target={"_blank"}>
          World Bank API
        </a>{" "}
        for the datasets used!
      </p>
    </div>
  );
};

export default About;
