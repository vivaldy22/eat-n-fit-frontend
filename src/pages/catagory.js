import React, { Component } from "react";

class Catagory extends Component {
  render() {
    return (
      <div>
        <div class="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>DataTables</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li class="breadcrumb-item active">Data Kategori</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Daftar Kategori</h3>
                    </div>

                    <div class="card-body">
                      <table
                        id="example2"
                        class="table table-bordered table-hover"
                      >
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>kantor</td>
                            <td>
                              <a title="Edit" style={{ marginRight: 15 }}>
                                <i class="fas fa-edit" />
                              </a>
                              <a title="Hapus">
                                <i class="fas fa-trash" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Internet Explorer 5.0</td>
                            <td>
                              <a title="Edit" style={{ marginRight: 15 }}>
                                <i class="fas fa-edit" />
                              </a>
                              <a title="Hapus">
                                <i class="fas fa-trash" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Catagory;
