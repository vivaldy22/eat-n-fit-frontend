import React, { Component } from "react";

export default class AddCategory extends Component {
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
