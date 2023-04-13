import { Toast } from 'antd-mobile';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  timeout: 120000,
});

interface Config extends AxiosRequestConfig {
  showLoading?: boolean;
  customMessage?: boolean;
}

instance.interceptors.request.use((config: Config) => {
  const accessToken = Cookies.get('CaipAccessToken') || '';
  Toast.clear();
  if (config?.showLoading) {
    Toast.show({
      content: '加载中...',
      icon: 'loading',
    });
  }

  return {
    ...config,
    // header中添加鉴权
    headers: {
      accessToken,
      ...config.headers,
    },
  };
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    Toast.clear();
    if (response.status === 200) {
      /* 处理下载相关接口 */
      if (response.data instanceof Blob || response.data instanceof ArrayBuffer) {
        return Promise.resolve(response);
      }
      if (response.data.code === 0) {
        return Promise.resolve(response.data);
      } else {
        if (!(response.config as Config).customMessage) {
          Toast.show({
            content: response.data.msg || '接口异常,请重试!',
            icon: 'fail',
            duration: 3000,
          });
        }
        return Promise.reject(response.data);
      }
    }
  },
  (err) => {
    console.log('error:', err);
    let errorMessage: string = err.message || '';

    if (err.response.status === 500) {
      errorMessage = '请求服务器失败，请重试！';
    }
    if (403 === err.response.status) {
      window.location.href = `${import.meta.env.BASE_URL}no-permission`;
    }

    if (401 === err.response.status) {
      errorMessage = '登录已过期，请重新登录';
      setTimeout(() => {
        window.location.replace(`${import.meta.env.BASE_URL}login`);
      }, 2000);
    }
    Toast.show({
      content: errorMessage,
      icon: 'fail',
      duration: 3000,
    });
    return Promise.reject(err);
  },
);

export interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T;
}

export type ApiPromiseResponse<T> = Promise<ApiResponse<T>>;

const http = {
  get: <T>(url: string, config?: Config): ApiPromiseResponse<T> => instance.get(url, config),
  post: <T>(url: string, data?: Record<string, any>, config?: Config): ApiPromiseResponse<T> =>
    instance.post(url, data, config),
  put: <T>(url: string, data?: Record<string, any>, config?: Config): ApiPromiseResponse<T> =>
    instance.put(url, data, config),
  delete: <T>(url: string, config?: Config): ApiPromiseResponse<T> => instance.delete(url, config),
};

export default http;
