import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./utils/navbar";
import Home from "./page/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
