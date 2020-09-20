import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./utils/Navbar"
import Home from "./page/Home";
import About from "./page/About"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./utils/footer";
import OrderPage from "./page/OrderPage";
import Download from "./page/Download";
import DownloadApp from "./page/DownloadApp";

function App() {
  return (
    <div style={{ background: "#fcad10" }}>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/produk" component={Home}/>
      <Route exact path="/tentangKami" component={About} />
      <Route exact path="/caraPesan" component={OrderPage} />
      <Route exact path="/unduh" component={Download} />
      <Route exact path="/unduhAplikasi" component={DownloadApp} />
      <Footer />
    </div>
  );
}

export default App;
