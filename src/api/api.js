import React, {Component} from "react";
import Food from "../json/food.json";
import axios from "axios";


export const getFood = async()=>{
    const res = await axios.get("/makanan");
    return await res.data;
};

export const getMenu = async()=>{
    const res = await axios.get("/menu");
    return await res.data;
};

export const getPacket = async()=>{
    const res = await axios.get("/paket");
    return await res.data;
};