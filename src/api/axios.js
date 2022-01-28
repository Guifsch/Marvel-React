import axios from "axios";

const API_URL = process.env.REACT_APP_MARVEL_API_BASE;

const api = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
