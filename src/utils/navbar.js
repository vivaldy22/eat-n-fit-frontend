import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/icons/enf.svg"


class Navbar extends Component {
  render() {
    return (
      <div class="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-light" style={{ background: "black"}}>
          <Link className="navbar-brand" to="/" style={{color:"whitesmoke", fontFamily:"lora", fontSize:"30px", fontWeight:"bold"}}>
            EAT & FIT
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav justify-content-end">
              <li class="nav-item active">
                <Link className="nav-link" to="/" style={{color:"whitesmoke", fontFamily:"happy monkey", fontSize:"15px", fontWeight:"bold"}}>
                  Beranda
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link active" to="/tentangKami" style={{color:"whitesmoke", fontFamily:"happy monkey", fontSize:"15px", fontWeight:"bold"}}>
                  Tentang Kami
                </Link>
              </li>
              <li class="nav-item">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                  style={{color:"whitesmoke", fontFamily:"happy monkey", fontSize:"15px", fontWeight:"bold"}}>
                    Produk
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#menuSehatRekomendasi" onClick={()=>window.open("/#menuSehatRekomendasi")}>Paket Sehat Ku</a>
                    <a class="dropdown-item" href="#paketAcaraBesar" onClick={()=>window.open("/#paketAcaraBesar")}>Paket Sehat Kita</a>
                    <a class="dropdown-item" href="#paketSeafood" onClick={()=>window.open("/#paketSeafood")}>Paket Menu Seafood</a>
                    <a class="dropdown-item" href="#paketDagingAyam" onClick={()=>window.open("/#paketDagingAyam")}>Paket Menu Daging Ayam</a>
                    <div class="dropdown-divider"></div>
                  </div>
                </li>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/caraPesan" style={{color:"whitesmoke", fontFamily:"happy monkey", fontSize:"15px", fontWeight:"bold"}}>
                  Cara Pesan
              </Link>
              </li>
              <li class="nav-item" >
              <Link className="nav-link" to="/unduh" style={{color:"whitesmoke", fontFamily:"happy monkey", fontSize:"15px", fontWeight:"bold"}}>
                 Unduh
              </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
