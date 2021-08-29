import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://www.amiiboapi.com/api",
});

export default axiosClient;
