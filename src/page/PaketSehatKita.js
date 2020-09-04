import React, { Component } from "react";
import img from "../assets/images/bg-header.jpg";
import img1 from "../img/home/sehat.jpg";
import imgUlangTahun from "../img/home/ulangtahun.jpg";
import imgKantor from "../img/home/office.jpg";
import imgAqiqah from "../img/home/aqiqah.jpg" 
import imgWedding from "../img/home/wedding.jpg"

class PaketSehatKita extends Component {
  render() {
    return (
      <div style={{marginTop:"-60px"}}>
        <section class="section-margin mb-lg-100" id="paket acara besar">
          <div  class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Sehat Kita</h4>
              <h2 style={{fontFamily:"PT Serif", fontSize:"50px" }}>Untuk Acara Besar</h2>
            </div>

            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              <div class="featured-item">
                <img class="card-img rounded-0" src={imgUlangTahun} alt="" />
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
                    <h3 class="price-tag">Rp.-</h3>
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
                    <h3>Paket Acara Kantor</h3>
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
                    <h3 class="price-tag">Rp.-</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img
                  class="card-img rounded-0"
                  src={imgAqiqah}
                  alt=""
                  style={{ height: 228 }}
                />
                <div class="item-body">
                  <a href="#">
                    <h3>Paket Aqiqah</h3>
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
                    <h3 class="price-tag">Rp.-</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img class="card-img rounded-0" src={imgWedding} alt="" />
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
                    <h3 class="price-tag">Rp.-</h3>
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

export default PaketSehatKita;
