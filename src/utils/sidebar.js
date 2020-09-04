import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <Link className="brand-link" to="/">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              class="brand-image img-circle elevation-3"
              style={{ opacity: 0.8 }}
            />
            <span class="brand-text font-weight-light">Eat & Fit Admin</span>
          </Link>

          <div class="sidebar">
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
              <div class="image">
                <img
                  src="dist/img/user2-160x160.jpg"
                  class="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div class="info">
                <Link className="d-block" to="/">
                  Eat 'N Fit
                </Link>
              </div>
            </div>

            <nav class="mt-2">
              <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li class="nav-item has-treeview menu-open">
                  <Link className="nav-link active" to="/">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/catagory">
                    <i class="nav-icon fas fa-th"></i>
                    <p>Data kategori</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/makanan">
                    <i class="nav-icon fas fa-th"></i>
                    <p>Data Makanan</p>
                  </Link>
                </li>
                <p style={{ color: "white" }}>Orderan</p>
                <li class="nav-item">
                  <Link className="nav-link" to="/order">
                    <i class="nav-icon fas fa-th"></i>
                    <p>Order</p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
