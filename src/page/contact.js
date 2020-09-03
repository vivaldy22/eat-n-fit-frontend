import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <section class="hero-banner hero-banner-sm">
          <div class="hero-wrapper">
            <div class="hero-left">
              <h1 class="hero-title">Contact Us</h1>
              <p>
                From set together our divided own saw divided the form god{" "}
                <br class="d-none d-xl-block">
                  {" "}
                  seas moveth you will fifth under replenish end
                </br>
              </p>
              <ul class="hero-info d-none d-md-block">
                <li>
                  <img src="img/banner/fas-service-icon.png" alt="" />
                  <h4>Fast Service</h4>
                </li>
                <li>
                  <img src="img/banner/fresh-food-icon.png" alt="" />
                  <h4>Fresh Food</h4>
                </li>
                <li>
                  <img src="img/banner/support-icon.png" alt="" />
                  <h4>24/7 Support</h4>
                </li>
              </ul>
            </div>
            <div class="hero-right">
              <div class="owl-carousel owl-theme w-100 hero-carousel">
                <div class="hero-carousel-item">
                  <img
                    class="img-fluid"
                    src="img/banner/hero-banner-sm.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <ul class="social-icons d-none d-lg-block">
              <li>
                <a href="#">
                  <i class="ti-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ti-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
export default Contact;
