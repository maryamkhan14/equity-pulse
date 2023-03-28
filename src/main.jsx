import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StatsContextProvider } from "./context/StatsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StatsContextProvider>
    <App />
  </StatsContextProvider>
);
