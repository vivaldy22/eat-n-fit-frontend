import React, { Component } from "react";
import PropTypes from "prop-types";
import checkboxes from "../../utils/checkbox";
import Checkbox from "../../utils/Checkboxes";
import { getFood, addPacket } from "../../config/api";
import Swal from "sweetalert2";
export default class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listFood: [],
      foodItem: [],
      namaPaket: "",
      hargaPaket: "",
      descPaket: "",
      page: 1,
      limit: 100,
      keyword: "",
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
    getFood(paging, token)
      .then((res) => {
        this.setState({ ...this.state, listFood: res });
      })
      .catch();
  };

  handleChange = (e) => {
    var nama = e.target.name;
    var value = e.target.value;
    this.setState({
      [nama]: value,
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

    addPacket(user, token)
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

  handleCheckBox = (event) => {
    let list = this.state.foodItem;
    let check = event.target.checked;
    let checked_food = event.target.value;
    if (check) {
      this.setState({
        foodItem: [...this.state.foodItem, checked_food],
      });
    } else {
      var index = list.indexOf(checked_food);
      if (index > -1) {
        list.splice(index, 1);
        this.setState({
          foodItem: list,
        });
      }
    }
  };
  render() {
    const listData = this.state.listFood.map((foods, ind) => (
      <div key={ind} className="checks">
        <label>
          <input
            type="checkbox"
            name={foods.food_name}
            value={foods.food_id}
            onChange={this.handleCheckBox}
          />
          {foods.food_name}
        </label>
      </div>
    ));
    return (
      <div>
        <div class="content-wrapper">
          <div class="container-fluid">
            <div class="row mt-3 d-flex justify-content-center">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Tambah Paket</h3>
                </div>
                <form role="form">
                  <div class="card-body">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Nama Paket</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        name="namaPaket"
                        placeholder="Nama Paket"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Harga Paket</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        name="hargaPaket"
                        placeholder="Harga Paket"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Deskripsi Paket</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        name="descPaket"
                        placeholder="Deskripsi Paket"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div id="newDeal" className="formContainer">
                      <div className="checkBoxContainer">{listData}</div>
                    </div>
                  </div>

                  <div class="card-footer">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
