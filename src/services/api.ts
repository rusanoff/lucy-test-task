import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
});

// const responseInterceptor = (config: AxiosResponse<any, any>) => {
//   return config;
// };
//
// const responseErrorInterceptor = (error: any) => {
//   if (error.response?.data && error.response.data.description) {
//     const message = error.response.data.description;
//
//     return Promise.reject(message);
//   }
//
//   return Promise.reject(error);
// };

// axiosInstance.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

export const api = axiosInstance;
