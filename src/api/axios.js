import axios from "axios";

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
