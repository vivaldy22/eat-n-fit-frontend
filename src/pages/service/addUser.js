import React, { Component } from "react";
import { getLevel, addUser } from "../../config/api";
import Swal from "sweetalert2";
export default class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      level: "",
      gender: "",
      password: "",
      balance: "",
      isLoading: false,
      disable: false,
      levels: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    var token = sessionStorage.getItem("auth-token");
    getLevel(token).then((res) => {
      this.setState({ ...this.state, levels: res, isLoading: true });
    });
  };

  handleSubmit = () => {
    this.setState({ ...this.state, disable: true });
    const user = {
      user_email: this.state.email,
      user_password: this.state.password,
      user_f_name: this.state.firstName,
      user_l_name: this.state.lastName,
      user_gender: this.state.gender,
      user_balance: this.state.balance,
      user_level: this.state.level,
      user_status: "1",
    };
    const token = sessionStorage.getItem("auth-token");

    addUser(user, token)
      .then((res) => {
        Swal.fire("", "Tambah User", "success");
        this.props.history.push({
          pathname: "/user",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const levelUser = this.state.levels.map((level, index) => (
      <option value={level.level_id}>{level.level_name}</option>
    ));
    return (
      <div>
        <div class="content-wrapper">
          <div class="container-fluid">
            <div class="row mt-3 d-flex justify-content-center">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Tambah User</h3>
                </div>
                <div class="card-body">
                  <div className="row">
                    <div className="col-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Nama Depan</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Nama_Depan"
                          name="firstName"
                          placeholder="Nama Depan"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Nama Belakang</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Nama_Belakang"
                          name="lastName"
                          placeholder="Nama Belakang"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">email</label>
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputPassword1"
                          name="email"
                          placeholder="email"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">gender</label>
                        <select
                          class="form-control"
                          name="gender"
                          onChange={this.handleChange}
                        >
                          <option>--Gender--</option>
                          <option value="L">Laki-Laki</option>
                          <option value="P">Perempuan</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="exampleInputPassword1"
                          name="password"
                          placeholder="password"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Level User</label>
                        <select
                          class="form-control"
                          name="level"
                          onChange={this.handleChange}
                        >
                          {" "}
                          <option>--Level User--</option>
                          {levelUser}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Balance User</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="balance"
                      placeholder="Balance"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div class="card-footer d-flex  justify-content-center">
                  {this.state.disable ? (
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={this.handleSubmit}
                      disabled
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="submit"
                      class="btn btn-primary"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
