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
            </div>
          </div>
        </div>

        <aside class="control-sidebar control-sidebar-dark"></aside>
      </div>
    );
  }
}

export default Dashboard;
