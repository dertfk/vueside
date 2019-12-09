import axios from "axios";
import qs from "qs";
const instance = axios.create({
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
  baseURL: "/"
});

instance.get = (url, params) => {
  return axios({
    method: "get",
    url: url,
    params: params
  });
};
instance.post = (url, params) => {
  return axios({
    method: "post",
    url: url,
    params: params
  });
};
instance.put = (url, body, ...rest) => {
  return axios({
    method: "put",
    url: url,
    data: body,
    responseType: rest.responseType
  });
};
instance.delete = (url, params) => {
  return axios({
    method: "delete",
    url: url,
    data: params
    // params: params
  });
};
instance.formdata = (url, data, config = {}) => {
  const formData = qs.stringify(data);
  return instance.request({
    url,
    data: formData,
    method: config.method || "post",
    ...config,
    headers: {
      ...config.headers,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
};

// instance.download = {
//   get(url, config) {
//     return instance.get(url, { ...config, responseType: "blob" });
//   },
//   post(url, data, config) {
//     return instance.post(url, data, { ...config, responseType: "blob" });
//   }
// };
// // Content-Type:application/x-www-form-urlencoded上传图片
// instance.upload = (url, data, config = {}) => {
//   const formData = new FormData();
//   data.forEach(item => formData.append(item.name, item.value));
//   console.log("upload formdata ===", data, formData);
//   // const qsFormData = qs.stringify(formData);
//   // add token if need
//   config.headers = {
//     ...(config.headers || {}),
//     "X-Token": CookieStorage.token
//   };
//   return instance.request({
//     method: "post",
//     ...config,
//     url,
//     data: formData,
//     headers: { ...config.headers, "Content-Type": "multipart/form-data" }
//   });
// };
// instance.formdata = (url, data, config = {}) => {
//   const formData = qs.stringify(data);
//   return instance.request({
//     url,
//     data: formData,
//     method: config.method || "post",
//     ...config,
//     headers: {
//       ...config.headers,
//       "Content-Type": "application/x-www-form-urlencoded"
//     }
//   });
// };

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 可对config添加自定义字段
    return config;
  },
  err => {
    if (err.response) {
      return Promise.reject(err);
    }
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    // hide loading
    // show error_msg and reject
    if (error && error.response && error.response.status) {
      // 对部分错误码统一处理
      switch (error.response.status) {
        case 401:
          // to login or authorize
          break;
        case 404:
          // request failed, no res on server
          break;
        case 500:
          // server error
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
