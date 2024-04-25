import axios from "axios";
import { baseUrl } from "./baseUrl";

export const server = axios.create({
  baseURL: baseUrl,
});

server.interceptors.request.use((config) => {
  return config;
});
