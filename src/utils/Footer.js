import React, { Component } from "react";
import icon from "../assets/images/icons/enf.svg"
import { Link } from "react-router-dom";


class Footer extends Component {
  render() {
    return (
   <div>
     <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6" style={{marginLeft:"-10px"}}>
            <h6 style={{color:"white" , fontFamily: "Lora", fontSize:"30px", icon:`${icon}`}}> Eat & Fit</h6>
            <p className="text-justify"  style={{color:"white" , fontSize:"18px"}}>Penyedia jasa <i>makanan sehat</i> dengan varian menu yang
                  lezat dan kandungan gizi yang diukur oleh Nutrisionist terbaik
                  berdasarkan takaran angka kecukupan gizi yang diberikan khusus
                  untuk konsumen .</p>
          </div>

          <div className="col-xs-6 col-md-3" style={{marginLeft:"50px"}}>
            <h6>Paket</h6>
            <ul className="footer-links">
              <li><a href="#menuSehatRekomendasi">Paket Sehat Ku</a></li>
              <li><a href="#paketAcaraBesar">Paket Sehat Kita</a></li>
              <li><a href="#paketSeafood">Paket Seafood</a></li>
              <li><a href="#paketDagingAyam">Paket Daging Ayam</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3" style={{marginLeft:"-50px"}}>
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/tentangKami">Tentang Kami</Link></li>
              <li><Link to="/caraPesan">Cara Pesan</Link></li>
              <li><Link to="/unduh">Unduh</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 by Eat & Fit</p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"/></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"/></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"/></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
    );
  }
}

export default Footer;
