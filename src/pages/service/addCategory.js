import React, { Component } from "react";
import PropTypes from "prop-types";
import checkboxes from "../../utils/checkbox";
import Checkbox from "../../utils/Checkboxes";
export default class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItem: [],
    };
  }
  handleChange(e) {
    const item = e.target.value;

    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (value == true) {
      this.setState({
        ...this.state.listItem.push(item),
      });
    }
    console.log(value);
    console.log(item);
  }
  render() {
    return (
      <div>
        <div class="content-wrapper">
          <div class="container-fluid">
            <div class="row mt-3 d-flex justify-content-center">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Tambah Paket</h3>
                </div>
                {console.log(this.state.listItem)}
                <form role="form">
                  <div class="card-body">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Nama Paket</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        name="Paket"
                        placeholder="Nama Kategori"
                      />
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck"
                        name="example1"
                      />
                    </div>

                    <div className="row">
                      <input
                        type="checkbox"
                        value="satu"
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="checkbox"
                        value="dua"
                        onChange={this.handleChange}
                      />
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
