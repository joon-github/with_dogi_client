"use client";
import axios, { AxiosError } from "axios";
import { baseUrl } from "./baseUrl";
type ErrorHandler = (error: AxiosError) => Promise<void> | void;
export const client = axios.create({
  baseURL: baseUrl,
});

client.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return error;
  }
);
const handle401Error = async () => {
  window.location.href = "/login";
};

const handle402Error: ErrorHandler = async (error) => {
  try {
    const res = await axios.post("/auth/accessToken");
    if (res?.status === 200 && error.config) {
      return axios.request(error.config);
    }
  } catch (e) {
    window.location.href = "/login";
    throw e;
  }
};

const errorHandlers: { [key: number]: ErrorHandler } = {
  401: handle401Error,
  402: handle402Error,
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const status = error.response?.status;
    const handler = errorHandlers[status];
    if (axios.isAxiosError(error) && handler) {
      return handler(error);
    } else {
      alert(error.response.data.message || "서버에 문제가 생겼습니다.");
    }

    return Promise.reject(error);
  }
);
