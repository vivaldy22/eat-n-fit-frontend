import React, { Component } from "react";
import { Row } from "react-bootstrap";
import ViewCarol from "../utils/Carousel";
import PaketSehatKu from "./PaketSehatKu";
import PaketSehatKita from "./PaketSehatKita";
import PaketSeafood from "./PaketSeafood";
import PaketDagingAyam from "./PaketDagingAyam";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <ViewCarol />
        </div>
        <div className="container">
          <div className="row mt-4">
            <PaketSehatKu />
            <PaketSehatKita />
            <PaketSeafood/>
            <PaketDagingAyam/>
          </div>
        </div>
      </div>
    );
  }
}
