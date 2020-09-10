import React, { Component } from "react";
import axios from "axios";
import Food from "../json/food.json";

var BaseUrl = "";
// axios.defaults.baseURL = "http://39c50d74fba9.ngrok.io";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
export const authLogin = async (Login) => {
  const res = await axios.post(`${BaseUrl}/auth/login`, Login);
  return await res.data;
};

export const getUser = async (token) => {
  const res = await axios.get(`${BaseUrl}/admin/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return await res.data;
};
export const getUserById = async (id, token) => {
  const res = await axios.get(`${BaseUrl}/admin/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return await res.data;
};

export const addUser = async (user, token) => {
  const res = await axios.post(`${BaseUrl}/admin/users`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.data;
};
export const updateUser = async (idUser, user, token) => {
  const res = await axios.put(`${BaseUrl}/admin/users/${idUser}`, user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(res);
  return await res.data;
};

export const deleteUser = async (idUser, token) => {
  const res = await axios.delete(`${BaseUrl}/admin/users/${idUser}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.data;
};

export const getLevel = async (token) => {
  const res = await axios.get(`${BaseUrl}/admin/levels`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return await res.data;
};
export const getMenu = async () => {
  const res = await axios.get(Food);
  return await res.menu;
};
