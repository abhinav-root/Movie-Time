import axios from "axios";

const baseUrl = process.env.TMDB_API_BASE_URL;
const accessToken = process.env.TMDB_API_ACCESS_TOKEN;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
  params: {
    language: "en-US",
  },
});

export default axiosInstance;
