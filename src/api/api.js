// import React, {Component} from "react";
// import Food from "../json/food.json";
// import Packet from "../json/packet.json";
import axios from "axios";

var BaseUrl = "";

// axios.defaults.headers.get['Authorization'] = sessionStorage.getItem('auth-token')

export const getFood = async (token) => {
    const res = await axios.get(
      `${BaseUrl}/foods?page=1&limit=1000&keyword=`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return await res.data;
  };

  export const getToken = async() =>{
    const login = {
      "user_email": "testing1@gmail.com",
      "user_password": "password"
    }
    const res = await axios.post(
      `${BaseUrl}/auth/login`, login
    );
    return await res.data;
  };

export const getPacket = async()=>{
    const res = await axios.get("/paket");
    return await res.data;
};