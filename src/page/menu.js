import React, { Component } from "react";
import img from "../assets/images/bg-header.jpg";

import img1 from "../img/home/gambar1.jpg";
import img2 from "../img/home/bola_daging.jpg";
import img3 from "../img/home/beef.jpg";
import img4 from "../img/home/vegetarian.jpg";

class Menu extends Component {
  render() {
    return (
      <div>
        <section class="section-margin mb-lg-100">
          <div class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title">Paket Sehat </h4>
              <h2>Menu Sehat Rekomendasi</h2>
            </div>

            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              <div class="featured-item">
                <img class="card-img rounded-0" src={img1} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3> Steamed Teochew Sauce (Muscle Building)</h3>
                  </a>
                  <p>
                    {" "}
                    Kreasi sehat dan lezat dari Eat 'N Fit dengan takaran gizi
                    yang diukur oleh Nutritionist terbaik untuk konsumen yang
                    fokus dalam pembentukan otot. Hidangan ini disajikan lengkap
                    dengan Nasi Merah, Mun Tahu, Cah Sawi & Wortel.
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
                    <h3 class="price-tag">Rp.250.000</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img class="card-img rounded-0" src={img2} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Bola Bola Daging Cincang Kreasi (Menu Diet)</h3>
                  </a>
                  <p>
                    Menu Bola-Bola Daging Cincang, menggunakan daging pilihan
                    yang minim akan lemak dan tinggi akan protein serta zat
                    besi. Disajikan lengkap dengan Bubur Nasi Merah, Tumis Jamur
                    Merang Cincang, dan Cah Sawi Putih Wortel Cincang
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
                    <h3 class="price-tag">Rp.250.000</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img class="card-img rounded-0" src={img3} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>
                      Beef Bulgogi with Shirataki Noodle (Rekomendasi untuk
                      Penderita Jantung){" "}
                    </h3>
                  </a>
                  <p>
                    Kreasi hidangan daging pilihan yang minim akan lemak dan
                    tinggi akan protein serta zat besi. Cocok disantap untuk
                    makan siang/malammu. Disajikan dengan shirataki noodle
                    japchae style, korean egg pancake, spinach namul & kimchi.
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
                <img class="card-img rounded-0" src={img4} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Tongseng Jamur Tiram (Vegetarian)</h3>
                  </a>
                  <p>
                    Kelezatan tongseng jamur tiram dalam paket vegetarian yang
                    disajikan lengkap dengan nasi merah bakar, wok fried
                    greenpeas dan paprika, tumis putren, dan wortel. Sangat
                    direkomendasikan bagi anda yang merupak seorang vegetarian
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
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Menu;
