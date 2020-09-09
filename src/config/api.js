import React, { Component } from "react";
import axios from "axios";
import Food from "../json/food.json";

var BaseUrl = "";
// axios.defaults.baseURL = "http://39c50d74fba9.ngrok.io";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
export const authLogin = async (Login) => {
  const res = await axios.post(`${BaseUrl}/auth/login`, Login);
  //await console.log(res);
  // console.log("api login");
  // console.log(res.data);
  console.log(res);
  return await res.data;
};

export const getUser = async (token) => {
  const res = await axios.get(`${BaseUrl}/admin/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(res);
  return await res.data;
};
export const getUserById = async (id, token) => {
  const res = await axios.get(`${BaseUrl}/admin/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(res);
  return await res.data;
};

export const addUser = async (user, token) => {
  console.log(user);
  console.log(token);
  const res = await axios.post(`${BaseUrl}/admin/users`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res);
  return await res.data;
};

export const getLevel = async (token) => {
  const res = await axios.get(`${BaseUrl}/admin/levels`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(res);
  return await res.data;
};
export const getMenu = async () => {
  const res = await axios.get(Food);
  return await res.menu;
};

// export const getPacket = async () => {
//   const res = await axios.get(`../json/packet.json`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return await res.data;
// };
