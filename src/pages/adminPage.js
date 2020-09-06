import React, { Component } from "react";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import Navbar from "../utils/navbar";
import Sidebar from "../utils/sidebar";
import Catagory from "../pages/catagory";
import Food from "../pages/dataMakanan";
import OrderFood from "../pages/order";
import AddCategory from "../pages/addCategory";
import AddFood from "../pages/addFood";
import { Route } from "react-router-dom";
class AdminPage extends Component {
  render() {
    let { logOut } = this.props;
    return (
      <div>
        <Navbar logout={logOut} />
        <Sidebar />
        <Route exact path="/" component={Dashboard} />

        <Route path="/catagory" component={Catagory} />
        <Route path="/makanan" component={Food} />
        <Route path="/order" component={OrderFood} />
        <Route path="/addCategory" component={AddCategory} />
        <Route path="/addFood" component={AddFood} />
      </div>
    );
  }
}

export default AdminPage;
