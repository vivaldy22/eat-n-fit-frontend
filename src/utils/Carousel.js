import React, { Component } from "react";
import img from "../assets/images/bg-header.jpg";
import img2 from "../assets/images/javakitchen.jpg";
import img3 from "../assets/images/2.jpg"
import { Carousel } from "react-bootstrap";
class ViewCarol extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100"  src={img3} alt="First slide" />
            <Carousel.Caption>
              <h1 style={{color:"white", fontSize: "70px", fontFamily:"Lora", marginBottom:"120px"}}>Jagonya Masakan Sehat Cita Rasa Indonesia</h1>
              <p style={{color:"white", fontSize: "20px"}}>Makanan Sehat Awal Pola Hidup Sehat</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h3 style={{color:"white", fontSize: "70px", fontFamily:"Lora", marginBottom:"120px"}}>Solusi Berbagai Acara Anda</h3>
              <p style={{color:"white", fontSize: "20px"}}>Makanan Sehat Awal Pola Hidup Sehat</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img} alt="Third slide" />
            <Carousel.Caption>
              <h3 style={{color:"white", fontSize: "50px", fontFamily:"Lora", marginBottom:"120px"}}>Download Aplikasi Eat & Fit Pada Ponsel Anda dan Nikmati Layanannya</h3>
              <p style={{color:"white", fontSize: "20px"}}>
              Makanan Sehat Awal Pola Hidup Sehat
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ViewCarol;
