import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { Spin } from "antd";
import ReactDOM from 'react-dom'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1500
});

let needLoadingRequestCount = 0;

// * 显示loading
export const showFullScreenLoading = () => {
  if (needLoadingRequestCount === 0) {
    const dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    ReactDOM.render(<Spin />, dom);
  }
  needLoadingRequestCount++;
};

// * 隐藏loading
export const tryHideFullScreenLoading = () => {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    document.body.removeChild(document.getElementById("loading") as HTMLElement);
  }
};


// 添加请求拦截器
service.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
  // 在发送请求之前做些什么
  return config;
}, function (error: AxiosError) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response: AxiosResponse) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data;
}, function (error: AxiosError) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service;