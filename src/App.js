import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Navbar from "./utils/navbar";
import Sidebar from "./utils/sidebar";
import Catagory from "./pages/catagory";
import Food from "./pages/dataMakanan";
import OrderFood from "./pages/order";
import LoginPage from "./loginpage/loginNew";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <LoginPage />
      {/* <Navbar />
      <Sidebar />
      <Route exact path="/" component={Dashboard} />

      <Route path="/catagory" component={Catagory} />
      <Route path="/makanan" component={Food} />
      <Route path="/order" component={OrderFood} /> */}
      {/* <Dashboard /> */}
      {/* <Catagory /> */}
    </div>
  );
}

export default App;
