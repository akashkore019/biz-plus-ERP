import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.VITE_API_BASE || '',
  headers: { 'Content-Type': 'application/json' }
})

// Add request/response interceptors as needed
axiosClient.interceptors.request.use(config => {
  // add auth token if present
  return config
})

export default axiosClient
