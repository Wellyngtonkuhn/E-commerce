import axios from "axios";

const productionUrl = "https://ecommerce-back-end-api.onrender.com";
const devUrl = "http://localhost:3004";

export const api = axios.create({
  baseURL: devUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
