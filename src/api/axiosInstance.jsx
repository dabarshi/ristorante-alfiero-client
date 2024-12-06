import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Use Vite's environment variable syntax
  // baseURL: "http://localhost:5000/api", // Replace with your API base URL
});

// Add an interceptor to dynamically set headers
axiosInstance.interceptors.request.use((config) => {
  // If the request contains FormData, set Content-Type to multipart/form-data
  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  } else {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
});

export default axiosInstance;
