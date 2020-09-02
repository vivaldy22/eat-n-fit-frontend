import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          class="navbar navbar-expand-lg navbar-light "
          style={{ background: "#422018" }}
        >
          <Link className="navbar-brand" to="/">
            EAT&FIT
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
          <div
            class="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul class="nav navbar-nav menu_nav justify-content-end">
              <li class="nav-item active">
                <Link className="nav-link" to="/">
                  Beranda
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link active" to="/about">
                  Tentang Kami
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Produk
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Cara Pesan
                </a>
              </li>
              <li class="nav-item">
                <Link className="nav-link active" to="/contact">
                  Kontak
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
