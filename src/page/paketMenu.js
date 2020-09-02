import React, { Component } from "react";
import img from "../assets/images/bg-header.jpg";

import img1 from "../img/home/sehat.jpg";
class PaketMenu extends Component {
  render() {
    return (
      <div>
        <section class="section-margin mb-lg-100">
          <div class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title">Paket Menu Sehat</h4>
              <h2>Paket Menu Terbaik</h2>
            </div>

            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              <div class="featured-item">
                <img class="card-img rounded-0" src={img1} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Sate Lilit ala Vegetarian</h3>
                  </a>
                  <p>
                    {" "}
                    cocok untuk menemani makan siang/malammu. Disajikan lengkap
                    dengan Nasi Putih, Mun Tahu, dan Acar Kuning (Timun, Wortel,
                    Putren)
                  </p>
                  <div class="d-flex justify-content-between">
                    <ul class="rating-star">
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                    </ul>
                    <h3 class="price-tag">Rp.25.0000</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img
                  class="card-img rounded-0"
                  src="img/home/featured2.png"
                  alt=""
                />
                <div class="item-body">
                  <a href="#">
                    <h3>Patatas Bravas</h3>
                  </a>
                  <p>Whales and darkness moving</p>
                  <div class="d-flex justify-content-between">
                    <ul class="rating-star">
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                    </ul>
                    <h3 class="price-tag">Rp.25.0000</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img
                  class="card-img rounded-0"
                  src="img/home/featured3.png"
                  alt=""
                />
                <div class="item-body">
                  <a href="#">
                    <h3>Pulled Sandwich</h3>
                  </a>
                  <p>Whales and darkness moving</p>
                  <div class="d-flex justify-content-between">
                    <ul class="rating-star">
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                    </ul>
                    <h3 class="price-tag">Rp.25.0000</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img
                  class="card-img rounded-0"
                  src="img/home/featured1.png"
                  alt=""
                />
                <div class="item-body">
                  <a href="#">
                    <h3>Mountain Mike Pizza</h3>
                  </a>
                  <p>Whales and darkness moving</p>
                  <div class="d-flex justify-content-between">
                    <ul class="rating-star">
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                      <li>
                        <i class="ti-star"></i>
                      </li>
                    </ul>
                    <h3 class="price-tag">Rp.25.0000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PaketMenu;
