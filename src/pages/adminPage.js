import React, { Component } from "react";

import Dashboard from "../pages/dashboard";
import Navbar from "../utils/navbar";
import Sidebar from "../utils/sidebar";
import Catagory from "./packets";
import Food from "../pages/dataMakanan";
import OrderFood from "../pages/order";
import AddCategory from "./service/addCategory";
import AddFood from "./service/addFood";
import AddUser from "./service/addUser";
import { Route } from "react-router-dom";
import DataUser from "./user";
import EditUser from "./service/editUser";
import EditFood from "./service/editFood";
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
        <Route path="/addUser" component={AddUser} />
        <Route path="/editUser/:id" component={EditUser} />
        <Route path="/editFood/:id" component={EditFood} />
        <Route path="/user" component={DataUser} />
      </div>
    );
  }
}

export default AdminPage;
