import axios from 'axios';

let token = '6016388c4fbed3d455fc39f0c1b9d2da';

const api_connect = axios.create({
  baseURL: 'https://connect-service.msbtec.com.br',
});

api_connect.interceptors.request.use(
  async (config) => {
    if (token) {
      config.headers.appsecretkey = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function setToken(data) {
  token = data;
}

export default api_connect;
