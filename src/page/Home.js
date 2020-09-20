import React, { Component } from "react";
import ViewCarol from "../utils/Carousel";
import Food from "../json/food.json"
import Packet from "../json/packet.json"
import MyHealthyPacket from "./MyHealthyPacket";
import EventPacket from "./EventPacket";


export default class Home extends Component {
  state = {
    foods: Food.foods_recommend,
    packets: Packet.packet
  }
  
  render() {
    return (
      <div>
        <div>
        <ViewCarol />
        </div>
        <div className="container">
          <div className="row mt-4">
            <MyHealthyPacket foods={this.state.foods} />
            <EventPacket packets={this.state.packets}/>
          </div>
        </div>
      </div>
    );
  }
}
