import axios from "axios";
import { useAuthStore } from "../store/auth.store";

/**
 * Axios Instance
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

/**
 * ================================
 * REQUEST INTERCEPTOR
 * ================================
 */
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

/**
 * ================================
 * REFRESH TOKEN HANDLER
 * ================================
 */
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token);
  });

  failedQueue = [];
};

const refreshToken = async () => {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/auth/refresh`,
    { token: useAuthStore.getState().refreshToken },
    { withCredentials: true },
  );

  return response.data.accessToken;
};

/**
 * ================================
 * RESPONSE INTERCEPTOR
 * ================================
 */
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token) => {
              originalRequest.headers.Authorization = "Bearer " + token;
              resolve(api(originalRequest));
            },
            reject,
          });
        });
      }

      isRefreshing = true;

      try {
        const newAccessToken = await refreshToken();

        useAuthStore.getState().setAuth(newAccessToken, null);

        processQueue(null, newAccessToken);

        originalRequest.headers.Authorization = "Bearer " + newAccessToken;

        return api(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        useAuthStore.getState().logout();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  },
);

export default api;
