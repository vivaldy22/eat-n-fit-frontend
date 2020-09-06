import React, { Component } from "react";
import axios from "axios";
export const getFood = async () => {
  const res = await axios.get("../json/food.json");
  return await res.data;
};

export const getMenu = async () => {
  const res = await axios.get(`../json/menu.json`);
  return await res.data;
};

export const getPacket = async () => {
  const res = await axios.get(`../json/packet.json`);
  return await res.data;
};
