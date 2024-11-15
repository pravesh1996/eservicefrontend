
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4212/eservice/api",
});

export default api;
