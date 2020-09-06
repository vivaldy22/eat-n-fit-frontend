import React, { Component } from "react";
import img from "../assets/images/bg-header.jpg";
import img1 from "../img/home/gambar1.jpg";
import img2 from "../img/home/bola_daging.jpg";
import img3 from "../img/home/beef.jpg";
import img4 from "../img/home/pregnancy.jpg"
import img5 from "../img/home/vegetarian.jpg";
import ModalImage from "../utils/ModalAKG"
import Food from "../json/food.json"

class PaketSehatKu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      listMenu:[]
    };
  }
componentDidMount(){
  this.setState({
    listMenu:Food.menu
  })
}
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleCancel = () => {
    this.setState({
      show: false,
    });
  };

  render() {

    const paketSehat= this.state.listMenu.map((menu,index)=>(
      <div class="featured-item">
      <img class="card-img rounded-0" src={menu.food_picture} onClick={this.handleShow} alt="" />
      <div class="item-body">
        <a href="#">
    <h3>{menu.food_name}</h3>
        </a>
        <p>
          {menu.food_desc}
         
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
    <h3 class="price-tag">{menu.food_price}</h3>
        </div>
      </div>
    </div>
    ))
    return (
      <div>
        <section class="section-margin mb-lg-100" id="menu sehat rekomendasi">
          <div class="container">
            <div class="section-intro mb-75px">
              <h4 class="intro-title" style={{fontFamily:"PT Serif", fontSize:"30px", color: "maroon"}}>Paket Sehat Ku </h4>
              <h2 style={{fontFamily:"PT Serif", fontSize:"50px"}}>Menu Sehat Rekomendasi Hari Ini</h2>
            </div>

            {/* data nanti ambil dari database */}
            <div class="owl-carousel owl-theme featured-carousel">
              {paketSehat}
              <div class="featured-item">
                <img class="card-img rounded-0" src={img1} onClick={this.handleShow} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>(Muscle Building) Steamed Teochew Sauce</h3>
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
                    <h3 class="price-tag">Rp.25.000</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img class="card-img rounded-0" src={img2} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>(Menu Diet) Bola Bola Daging Cincang Kreasi</h3>
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
                    <h3 class="price-tag">Rp.25.000</h3>
                  </div>
                </div>
              </div>
              <div class="featured-item">
                <img class="card-img rounded-0" src={img3} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>(Menu untuk
                      Penderita Jantung)
                    </h3>
                    <h3>
                      Beef Bulgogi with Shirataki Noodle {" "}
                    </h3>
                  </a>
                  <p>
                    Kreasi hidangan daging pilihan yang minim akan lemak dan
                    tinggi akan protein serta zat besi. Disajikan dengan shirataki noodle
                    japchae style, spinach namul & kimchi.
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
                    <h3>(Menu untuk Ibu Hamil)
                    Vegetable Spring Roll Pregnancy {" "}
                    </h3>
                  </a>
                  <p>
                  Menu ayam goreng mentega yang rendah lemak dan kalori serta mengandung protein. 
                  Disajikan lengkap dengan Brown rice, ayam goreng mentega, vegetable spring roll, serta Greenbeans.
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
                <img class="card-img rounded-0" src={img5} alt="" />
                <div class="item-body">
                  <a href="#">
                    <h3>(Menu Vegetarian) Tongseng Jamur Tiram</h3>
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
   {/* this value send to file ModalAKG */}
        <ModalImage
          show={this.state.show}
          handleClose={this.handleCancel}
          image={img1}
        />  
      </div>
    );
  }
}

export default PaketSehatKu;
