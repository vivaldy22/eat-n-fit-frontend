import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div style={{backgroundColor:"black"}} >
        <section class="cta-area text-center">
          <div class="container">
            <p>Untuk Menikmati layanan kami</p>
            <h2>Download Aplikasi Eat 'N Fit sekarang juga yuk...</h2>
            <a class="button">
              Download Aplikasi
            </a>
          </div>
        </section>
        <div className="container">
          <div className="row mt-5">
            <footer>
              <div class="footer-bottom  align-items-center text-center text-lg-left">
                <p class="">Copyright &copy; 2020 EAT 'N FIT</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
