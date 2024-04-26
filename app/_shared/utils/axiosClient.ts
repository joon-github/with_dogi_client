"use client";
import axios, { AxiosError, AxiosResponse } from "axios";
import { baseUrl } from "./baseUrl";
export interface MyResponseType {
  statusCode: number;
  message: string | null;
  data: any;
}
type ErrorHandler = (error: AxiosError) => Promise<void> | void;

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
axios.defaults.withCredentials = true;
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

client.interceptors.response.use(
  (response) => {
    if ([200.201].includes(response.status)) {
      alert(response.data.message);
    }
    return response.data;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    const handler = status ? errorHandlers[status] : undefined;
    if (handler) {
      return handler(error);
    } else {
      const message =
        error.response?.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
          ? error.response.data.message
          : "서버에 문제가 생겼습니다.";
      alert(message);
    }
  }
);
