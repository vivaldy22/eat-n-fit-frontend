import React, { Component } from "react";
import ViewCarol from "../utils/Carousel";
import MyHealthyPacket from "./MyHealthyPacket";
import EventPacket from "./EventPacket";


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
          </div>
        </div>
      </div>
    );
  }
}
