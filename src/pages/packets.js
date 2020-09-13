import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPacket, getDetailPacket } from "../config/api";
import ModalPacket from "../utils/modalPacket";
import loading from "../img/loading.gif";
class Packets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packetList: [],
      detailListFood: [],
      page: 1,
      limit: 5,
      total: 0,
      keyword: "",
      isLoading: false,
      show: false,
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
    getPacket(paging, token).then((res) => {
      this.setState({ ...this.state, packetList: res, isLoading: true });
    });
  };

  handleClose = () => {
    this.setState({ ...this.state, show: false });
  };

  detailPacket = (idPacket) => {
    var token = sessionStorage.getItem("auth-token");
    getDetailPacket(idPacket, token).then((res) => {
      this.setState({
        ...this.state,
        detailListFood: res.list_food,
        isLoading: true,
        show: true,
      });
    });
  };

  render() {
    const packet = this.state.packetList.map((list, index) => (
      <tr>
        <td>{index + 1}</td>
        <td>{list.packet_name}</td>
        <td>{list.packet_price}</td>
        <td>{list.packet_desc}</td>
        <td>
          <button
            title="Detail"
            className="btn btn-info btn-sm"
            style={{ marginRight: 15 }}
            onClick={() => {
              this.detailPacket(list.packet_id);
            }}
          >
            <i class="fas fa-list" />
          </button>
          <Link
            title="Edit"
            style={{ marginRight: 15 }}
            to={`/editPackets/${list.packet_id}`}
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
        {console.log(this.state.detailListFood)}
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
                    <li class="breadcrumb-item active">Data Paket</li>
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
                      <h3 class="card-title">Daftar Paket</h3>
                      <div className="d-flex flex-row-reverse">
                        <Link className="brand-link" to="/addPackets">
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
                              <th>Harga</th>
                              <th>Deskripsi</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>{packet}</tbody>
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
          <ModalPacket
            show={this.state.show}
            handleClose={this.handleClose}
            listFood={this.state.detailListFood}
          />
        </div>
      </div>
    );
  }
}

export default Packets;
