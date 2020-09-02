import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <section class="about section-margin pb-xl-70">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-xl-6 mb-5 mb-md-0 pb-5 pb-md-0">
                <div class="img-styleBox">
                  <div class="styleBox-border">
                    <img
                      class="styleBox-img1 img-fluid"
                      src="img/home/about-img1.png"
                      alt=""
                    />
                  </div>
                  <img
                    class="styleBox-img2 img-fluid"
                    src="img/home/about-img2.png"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-6 pl-md-5 pl-xl-0 offset-xl-1 col-xl-5">
                <div class="section-intro mb-lg-4">
                  <h4 class="intro-title">About Us</h4>
                  <h2 style={{ fontFamily: "monospace" }}>Eat 'N Fit</h2>
                </div>
                <p>
                  Eat 'N Fit penyedia jasa makanan sehat dengan varian menu yang
                  lezat dan kandungan gizi yang diukur oleh Nutrisionist terbaik
                  berdasarkan takaran angka kecukupan gizi yang diberikan khusus
                  untuk konsumen .
                </p>
                <a class="button button-shadow mt-2 mt-lg-4" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
