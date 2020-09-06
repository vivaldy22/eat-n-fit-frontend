import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div class="content-wrapper">
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0 text-dark">Dashboard</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3 col-sm-6 col-12">
                  <div class="info-box">
                    <span class="info-box-icon bg-info">
                      <i class="fas fa-clipboard-list"></i>
                    </span>

                    <div class="info-box-content">
                      <span class="info-box-text">Menu</span>
                      <span class="info-box-number">1,410</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-sm-6 col-12">
                  <div class="info-box">
                    <span class="info-box-icon bg-success">
                      <i class="far fa-flag"></i>
                    </span>

                    <div class="info-box-content">
                      <span class="info-box-text">Paket</span>
                      <span class="info-box-number">410</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-sm-6 col-12">
                  <div class="info-box">
                    <span class="info-box-icon bg-warning">
                      <i class="far fa-copy"></i>
                    </span>

                    <div class="info-box-content">
                      <span class="info-box-text">Order</span>
                      <span class="info-box-number">13,648</span>
                    </div>
                  </div>
                </div>

                <div class="col-md-3 col-sm-6 col-12">
                  <div class="info-box">
                    <span class="info-box-icon bg-danger">
                      <i class="far fa-star"></i>
                    </span>

                    <div class="info-box-content">
                      <span class="info-box-text">Likes</span>
                      <span class="info-box-number">93,139</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside class="control-sidebar control-sidebar-dark"></aside>
      </div>
    );
  }
}

export default Dashboard;
