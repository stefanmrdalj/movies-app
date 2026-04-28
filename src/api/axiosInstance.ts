import axios from "axios";
import type { AxiosInstance } from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export default axiosInstance;
