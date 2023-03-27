import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
