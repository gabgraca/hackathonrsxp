import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4001',
});

api.defaults.timeout = 3000

export default api;