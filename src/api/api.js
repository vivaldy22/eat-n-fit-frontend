import React, {Component} from "react";
import axios from "axios";


export const getFood = async ()=>{
    const res = await axios.get("${Food}");
    return await res.data;
};