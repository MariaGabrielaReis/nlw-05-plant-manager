import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.11:3000",
});

export default api;

// json-server ./src/services/server.json --host 192.168.15.11 --port 3000 --delay 700
