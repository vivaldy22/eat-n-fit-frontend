import React, { Component } from "react";
import { Link } from "react-router-dom";
import Food from "../json/food.json";
import { getMenu, getFood, getUser } from "../config/api";
import loading from "../img/loading.gif";
import { Col } from "react-bootstrap";

class DataUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    var token = sessionStorage.getItem("auth-token");
    getUser(token).then((res) => {
      console.log("data User:", res.user_id);
      this.setState({ ...this.state, userList: res, isLoading: true });
    });
  };

  render() {
    const user = this.state.userList.map((list, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{list.user_f_name}</td>
        <td>{list.user_l_name}</td>
        <td>{list.user_email}</td>
        <td>{list.user_balance}</td>
        <td>
          <Link
            title="Edit"
            style={{ marginRight: 15 }}
            to={`/editUser/${list.user_id}`}
          >
            <i class="fas fa-edit" />
          </Link>
          <button>
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
                    <li class="breadcrumb-item active">Data User</li>
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
                      <h3 class="card-title">Daftar User</h3>
                      <div className="d-flex flex-row-reverse">
                        <Link className="brand-link" to="/addUser">
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
                              <th>First Name</th>
                              <th>Last name</th>
                              <th>Email</th>
                              <th>Balance</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>{user}</tbody>
                        </table>
                      ) : (
                        <img src={loading} style={{ marginLeft: 180 }} />
                      )}
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

export default DataUser;
