import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StatsContextProvider } from "./context/StatsContext";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StatsContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
          <Route
            index={false}
            path="/countrydetails/:countryCode"
            element={<App />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </StatsContextProvider>
);
