"use client"
import axios from "axios"
import APIConfig from "./config"

const apiHead = axios.create({
    baseURL: `${APIConfig?.accessUrl}`,
    headers: {
        "Content-Type": `application/json`,
        "Access-Control-Allow-Origin":"*"
    }
})

export const loginUser = async(loginBody) =>{
    let res = await apiHead.post(`/users/user-login`, loginBody)
    return res.data;
}

export const registerUser = async(user) => {
    let res = await apiHead.post(`/users/save-new-user`, user)
    return res.data;
}

export const fetchUserDetailsByName = async(name) => {
    let res = await apiHead.get(`/users/user-details-by-username/${name}`);
    return res.data;
}