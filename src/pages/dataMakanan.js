import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMenu, getFood } from "../config/api";
import loading from "../img/loading.gif";
import { Modal, Button, Pagination } from "react-bootstrap";
class DataMakanan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuList: [],
      page: 1,
      limit: 2,
      active: 1,
      keyword: "",

      isLoading: false,
    };
  }
  componentDidMount() {
    this.loadData(this.state.page, this.state.limit, this.state.keyword);
  }
  loadData = (page, limit, keyword) => {
    var token = sessionStorage.getItem("auth-token");
    const paging = {
      page,
      limit,
      keyword,
    };
    getFood(paging, token).then((res) => {
      console.log("data User:", res);
      this.setState({ ...this.state, menuList: res, isLoading: true });
    });
  };

  render() {
    const menu = this.state.menuList.map((list, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{list.food_name}</td>
        <td>{list.food_calories}</td>
        <td>{list.food_fat}</td>
        <td>{list.food_carbs}</td>
        <td>{list.food_protein}</td>
        <td>{list.food_portion}</td>
        <td>{list.food_price}</td>
        <td>{list.food_desc}</td>
        <td>
          <button
            title="Edit"
            className="btn btn-success btn-sm"
            style={{ marginRight: 15 }}
          >
            <i class="fas fa-edit" />
          </button>
          <button
            title="Edit"
            className="btn btn-info btn-sm"
            style={{ marginRight: 15 }}
          >
            <i class="fas fa-list" />
          </button>
          <button className="btn btn-danger btn-sm">
            <i class="fas fa-trash" />
          </button>
        </td>
      </tr>
    ));
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
                      {this.state.isLoading ? (
                        <table
                          id="example2"
                          class="table table-bordered table-hover"
                        >
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>Name</th>
                              <th>kalori</th>
                              <th>lemak</th>
                              <th>karbonhidrat</th>
                              <th>protein</th>
                              <th>porsi</th>
                              <th>harga</th>
                              <th>deskripsi</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>{menu}</tbody>
                        </table>
                      ) : (
                        <img src={loading} style={{ marginLeft: 180 }} />
                      )}
                    </div>
                    <div className="card-footer d-flex justify-content-end"></div>
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
