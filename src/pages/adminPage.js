import React, { Component } from "react";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Navbar from "../utils/navbar";
import Sidebar from "../utils/sidebar";
import Catagory from "../pages/catagory";
import Food from "../pages/dataMakanan";
import OrderFood from "../pages/order";
import { Route } from "react-router-dom";
class AdminPage extends Component {
  render() {
    let { islogin } = this.props;
    return (
      <div>
        {console.log(islogin)}

        <Navbar />
        <Sidebar />
        <Route exact path="/" component={Dashboard} />

        <Route path="/catagory" component={Catagory} />
        <Route path="/makanan" component={Food} />
        <Route path="/order" component={OrderFood} />
      </div>
    );
  }
}

export default AdminPage;
