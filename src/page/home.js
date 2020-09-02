import React, { Component } from "react";
import { Row } from "react-bootstrap";
import ViewCarol from "../utils/Carousel";
import Menu from "./menu";
import PaketMenu from "./paketMenu";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className={Row}>
            <ViewCarol />
            <Menu />
            <PaketMenu />
          </div>
        </div>
      </div>
    );
  }
}
