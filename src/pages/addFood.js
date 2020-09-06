import React, { Component } from "react";

export default class AddFood extends Component {
  render() {
    return (
      <div>
        <div class="content-wrapper">
          <div class="container-fluid">
            <div class="row mt-3 d-flex justify-content-center">
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Tambah Makanan</h3>
                </div>

                <form role="form">
                  <div class="card-body">
                    <div className="row">
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Nama Paket</label>
                          <select class="form-control" name="Paket">
                            <option>Paket Menu 1</option>
                            <option>Paket Menu 2</option>
                            <option>Paket Menu 3</option>
                            <option>Paket Menu 4</option>
                            <option>Paket Menu 5</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Nama Menu</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="nama_menu"
                            placeholder="Nama Menu"
                          />
                        </div>
                      </div>
                    </div>
                    <label for="exampleInputPassword1">AKG Makanan</label>
                    <div className="row">
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Protein</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="protein"
                            placeholder="Protein"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Karbohidrat</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="Karbohidrat"
                            placeholder="Karbohidrat"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Lemak</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="Lemak"
                            placeholder="Lemak"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputPassword1">kalori</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="kalori"
                            placeholder="kalori"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="exampleInputPassword1">Deskripsi Menu</label>
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="Deskripsi Menu"
                        name="deskripsi"
                      ></textarea>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Harga Menu</label>
                          <input
                            type="text"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="harga"
                            placeholder="Harga Menu"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div class="form-group">
                          <label for="exampleInputPassword1">Rating Menu</label>
                          <input
                            type="number"
                            class="form-control"
                            id="exampleInputPassword1"
                            name="rating"
                            placeholder="Rating Menu"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-group">
                      <label for="exampleInputFile">Gambar Menu</label>
                      <div class="input-group">
                        <div class="custom-file">
                          <input
                            type="file"
                            name="gambar"
                            class="custom-file-input"
                            id="exampleInputFile"
                          />
                          <label
                            class="custom-file-label"
                            for="exampleInputFile"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
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
