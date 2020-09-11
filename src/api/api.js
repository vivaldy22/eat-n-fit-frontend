import React, {Component} from "react";
import Food from "../json/food.json";
import Packet from "../json/packet.json";
import axios from "axios";

var BaseUrl = "";
export const getFood = async (token) => {
    const res = await axios.get(
      `${BaseUrl}/user/foods`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  
    return await res.data;
  };

  // export const getToken = async () => {
  //   const res = await axios.get(
  //     `${BaseUrl}/auth/user`,
  //   );
  
  //   return await res.data;
  // };

export const getPacket = async()=>{
    const res = await axios.get("/paket");
    return await res.data;
};