import React, { Component } from "react";
import { Link } from "react-router-dom";
class DataMakanan extends Component {
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
                    <li class="breadcrumb-item active">Data Makanan</li>
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
                      <h3 class="card-title">Daftar Makanan</h3>
                      <div className="d-flex flex-row-reverse">
                        <Link className="brand-link" to="/addFood">
                          <button className="btn btn-primary">Tambah</button>
                        </Link>
                      </div>
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
                            <td>Trident</td>
                            <td>Internet Explorer 4.0</td>
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
                            <td>Trident</td>
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

export default DataMakanan;
