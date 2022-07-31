import axios from "axios";

const BASE_URL = "http://localhost:3002";

export const API = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const axiosJWT = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});
