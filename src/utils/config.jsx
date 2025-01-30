import axios from "axios";
import React from "react";

export const API = axios.create({
    baseURL: "https://greenshop-c00c.onrender.com/api/"
})