import axios from "axios";
import { BASE_URL_ADDRESS } from "constant/baseUrl";

const instance = axios.create({
  baseURL: BASE_URL_ADDRESS,
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = ` Apikey {d49c0390363d5252e86e5f60905fae4d7be1e59f3d8685a370b7c9a876c22f8c}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance };
