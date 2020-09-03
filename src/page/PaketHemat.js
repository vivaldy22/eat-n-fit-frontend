import React, { Component } from 'react';
import img from "../assets/images/bg-header.jpg";

import img1 from "../img/home/sehat.jpg";
import imgUl from "../img/home/ulangtahun1.jpg";
import imgKantor from "../img/home/kantor.jpg";
import imgpernikahan from "../img/home/pernikahan.jpg";

class PaketHemat extends Component {
    render() {
        return (
            <div>
        <section class="section-margin mb-lg-100">
          <div  class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Sehat Kita</h4>
              <h2 style={{fontFamily:"PT Serif", fontSize:"50px" }}>Untuk Acara Besar</h2>
            </div>

            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              <div class="featured-item">
                <img class="card-img rounded-0" src={imgUl} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Paket Ulang Tahun</h3>
                  </a>
                  <p> </p>
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
                  src={imgKantor}
                  alt=""
                  style={{ height: 228 }}
                />
                <div class="item-body">
                  <a href="#">
                    <h3>Paket Kantoran</h3>
                  </a>
                  <p></p>
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
                <img class="card-img rounded-0" src={imgpernikahan} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Paket pernikahan </h3>
                  </a>
                  <p></p>
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

export default PaketHemat;