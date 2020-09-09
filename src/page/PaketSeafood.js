import React, { Component } from 'react';
import imgCumi from "../img/home/cumi-masak-hitam.jpg";
import imgTunaLadaHitam from "../img/home/Tuna-Lada-Hitam2.jpg"
import imgDabuDabu from "../img/home/Tongkol-Dabu-Dabu.jpg"
import imgCabeIjo from "../img/home/Tuna-Cabe-Ijo.jpg"
import imgTongkolPindangLodeh from "../img/home/Tongkol-Pindang-Lodeh.jpg"


class PaketSeafood extends Component {
    render() {
        return (
      <div style={{marginTop:"-60px"}} id="paketSeafood">
        <section class="section-margin mb-lg-100">
          <div  class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Seafood</h4>
              <h2 style={{fontFamily:"PT Serif", fontSize:"50px" }}>Menu Olahan Seafood</h2>
            </div>

            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              <div class="featured-item">
                <img class="card-img rounded-0" src={imgCumi} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Cumi Masak Hitam</h3>
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
                <img class="card-img rounded-0" src={imgTunaLadaHitam} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Tuna Lada Hitam</h3>
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
                <img class="card-img rounded-0" src={imgDabuDabu} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Tongkol Dabu-Dabu</h3>
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
                <img class="card-img rounded-0" src={imgCabeIjo} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Tuna Cabe Ijo</h3>
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
                <img class="card-img rounded-0" src={imgTongkolPindangLodeh} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Tongkol Pindang Lodeh</h3>
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

export default PaketSeafood;