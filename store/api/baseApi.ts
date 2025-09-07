import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (__DEV__) {
      console.log("API Request:", config.method?.toUpperCase(), config.url);
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (__DEV__) {
      console.log("API Response:", response.status, response.config.url);
    }
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

interface QueryParams {
  url: string;
  method?: string;
  data?: any;
  headers?: Record<string, string>;
  params?: any;
}

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ url, method = "GET", data, headers, params }: QueryParams) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        headers,
        params,
      });
      return { data: result.data };
    } catch (axiosError: any) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_API_BASE_URL || "",
  }),
  tagTypes: ["User", "Product", "Order"],
  endpoints: () => ({}),
});
