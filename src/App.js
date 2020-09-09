import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./utils/navbar";
import Home from "./page/home";
import About from "./page/about";
import Contact from "./page/contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./utils/footer";
import CaraPesan from "./page/CaraPesan";
import Unduh from "./page/Unduh"

function App() {
  return (
    <div style={{ background: "#fcad10" }}>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/produk" component={Home}/>
      <Route exact path="/tentangKami" component={About} />
      <Route exact path="/caraPesan" component={CaraPesan} />
      <Route exact path="/unduh" component={Unduh} />
      <Footer />
    </div>
  );
}

export default App;
