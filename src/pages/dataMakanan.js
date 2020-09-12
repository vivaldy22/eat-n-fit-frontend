import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMenu, getFood, getTotalUser } from "../config/api";
import loading from "../img/loading.gif";
import { Modal, Button, Pagination } from "react-bootstrap";
class DataMakanan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuList: [],
      page: 1,
      limit: 5,
      total: 0,
      keyword: "",

      isLoading: false,
    };
  }
  componentDidMount() {
    this.loadData(this.state.page, this.state.limit, this.state.keyword);
    this.getTotal();
  }
  loadData = (page, limit, keyword) => {
    var token = sessionStorage.getItem("auth-token");
    const paging = {
      page,
      limit,
      keyword,
    };
    getFood(paging, token).then((res) => {
      this.setState({ ...this.state, menuList: res, isLoading: true });
    });
  };
  getTotal = () => {
    var token = sessionStorage.getItem("auth-token");
    getTotalUser(token)
      .then((res) => {
        this.setState({ ...this.state, total: res.total_data });
      })
      .catch((e) => {});
  };

  render() {
    let maks = this.state.total / this.state.limit;
    let items = [];
    if (this.state.total % this.state.limit != 0) {
      maks++;
    }

    for (let number = 1; number <= maks; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number == this.state.page}
          onClick={() => {
            this.setState({ ...this.state, isLoading: false });
            this.loadData(number, this.state.limit, this.state.keyword);
          }}
        >
          {number}
        </Pagination.Item>
      );
    }
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
            title="Detail"
            className="btn btn-info btn-sm"
            style={{ marginRight: 15 }}
          >
            <i class="fas fa-list" />
          </button>
          <Link
            title="Edit"
            style={{ marginRight: 15 }}
            to={`/editFood/${list.food_id}`}
          >
            <button className="btn btn-success btn-sm">
              <i class="fas fa-edit" />
            </button>
          </Link>
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
                    <div className="card-footer d-flex justify-content-end">
                      <Pagination size="sm">
                        <Pagination.Prev
                          disabled={this.state.page == 1}
                          onClick={() => {
                            this.setState({ ...this.state, isLoading: false });

                            this.loadData(
                              this.state.page - 1,
                              this.state.limit,
                              this.state.keyword
                            );
                          }}
                        />{" "}
                        {items}
                        <Pagination.Next
                          disabled={this.state.page == Math.floor(maks)}
                          onClick={() => {
                            this.setState({ ...this.state, isLoading: false });
                            this.loadData(
                              this.state.page + 1,
                              this.state.limit,
                              this.state.keyword
                            );
                          }}
                        />
                      </Pagination>
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
