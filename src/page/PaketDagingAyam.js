import React, { Component } from 'react';
import imgAyamBBQ from "../img/home/Steik-Ayam-bbq.jpg"
import imgAyamGeprek from "../img/home/ayamGeprek.jpg"
import imgTongsengAyam from "../img/home/Tongseng-Ayam.jpg"
import imgAyamGorengKuning from "../img/home/ayam-goreng-kuning.jpg"
import imgAyamLadaHitam from "../img/home/ayam-lada-hitam.jpg"

class PaketDagingAyam extends Component {
    render() {
        return (
     <div style={{marginTop:"-60px"}} id="paketDagingAyam">
        <section class="section-margin mb-lg-100">
          <div  class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Daging Ayam</h4>
              <h2 style={{fontFamily:"PT Serif", fontSize:"50px" }}>Menu Olahan Daging Ayam</h2>
            </div>

            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              <div class="featured-item">
                <img class="card-img rounded-0" src={imgAyamBBQ} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Steak Ayam BBQ</h3>
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
                <img class="card-img rounded-0" src={imgAyamGeprek} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Ayam Geprek</h3>
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
                <img class="card-img rounded-0" src={imgTongsengAyam} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Tongseng Ayam</h3>
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
                <img class="card-img rounded-0" src={imgAyamGorengKuning} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Ayam Goreng Kuning</h3>
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
                <img class="card-img rounded-0" src={imgAyamLadaHitam} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>Ayam Lada Hitam</h3>
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

export default PaketDagingAyam;