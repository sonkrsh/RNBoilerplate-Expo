import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { ENV_CONFIG, logger } from '@/config/environment';

// Create axios instance with environment-based configuration
export const axiosInstance = axios.create({
  baseURL: ENV_CONFIG.API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging and auth
axiosInstance.interceptors.request.use(
  (config) => {
    logger.debug('API Request:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
    });
    
    // Add auth token here if available
    // const token = getAuthToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    
    return config;
  },
  (error) => {
    logger.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for logging and error handling
axiosInstance.interceptors.response.use(
  (response) => {
    logger.debug('API Response:', {
      status: response.status,
      url: response.config.url,
    });
    return response;
  },
  (error) => {
    logger.error('API Error:', {
      status: error.response?.status,
      message: error.response?.data?.message || error.message,
      url: error.config?.url,
    });
    
    // Handle common errors (unauthorized, etc.)
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      logger.warn('Unauthorized request detected');
    }
    
    return Promise.reject(error);
  }
);

// Query parameters interface for type safety
interface QueryParams {
  url: string;
  method?: string;
  data?: any;
  headers?: Record<string, string>;
  params?: any;
}

// Custom base query using axios
const axiosBaseQuery = ({ baseUrl }: { baseUrl: string }) =>
  async ({ url, method = 'GET', data, headers, params }: QueryParams) => {
    try {
      // Proper URL concatenation to avoid double slashes
      const fullUrl = new URL(url, baseUrl).toString();
      const result = await axiosInstance({
        url: fullUrl,
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

// Create the base API with environment configuration
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: ENV_CONFIG.API_BASE_URL,
  }),
  tagTypes: ['User', 'Product', 'Order'], // Add your tag types here
  endpoints: () => ({}),
});