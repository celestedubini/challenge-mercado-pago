import axios from 'axios';

const isDevelopment = import.meta.env.MODE === 'development';
const apiUrl = isDevelopment ? 'http://localhost:3001' : '';

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;
