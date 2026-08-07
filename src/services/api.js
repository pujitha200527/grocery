import axios from "axios";

const api = axios.create({
  baseURL: "https://grocerybackend-1d14.onrender.com/",
});

export default api;