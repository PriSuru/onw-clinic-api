
import axios from 'axios';

// Axios instance for port 5000
const axiosInstance5000 = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const apiService = {
  
  // If you need the default instance (for port 5000 only)
  get: (url, params) => axiosInstance5000.get(url, { params }),
  post: (url, data) => axiosInstance5000.post(url, data),
  // You can add other HTTP methods similarly for each instance
};
