import React, { Component } from "react";
import { Row } from "react-bootstrap";
import ViewCarol from "../utils/Carousel";
import Menu from "./menu";
import PaketMenu from "./paketMenu";
import PaketHemat from "./PaketHemat"
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-4">
            <ViewCarol />
            <Menu />
            <PaketMenu />
            <PaketHemat />
          </div>
        </div>
      </div>
    );
  }
}
