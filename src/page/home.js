import React, { Component } from "react";
import { Row } from "react-bootstrap";
import ViewCarol from "../utils/Carousel";
import MyHealthyPacket from "./MyHealthyPacket";
import EventPacket from "./EventPacket";
import SeafoodPacket from "./SeafoodPacket";
import ChickenPacket from "./ChickenPacket";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
        <ViewCarol />
        </div>
        <div className="container">
          <div className="row mt-4">
            <MyHealthyPacket />
            <EventPacket/>
            <SeafoodPacket/>
            <ChickenPacket/>
          </div>
        </div>
      </div>
    );
  }
}
