/*
 * @Author: vincent 1343327598@qq.com
 * @Date: 2022-08-11 10:56:05
 * @LastEditors: vincent 1343327598@qq.com
 * @LastEditTime: 2022-08-11 11:48:39
 * @FilePath: /vincentvue/src/axios/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: vincent 1343327598@qq.com
 * @Date: 2022-08-11 10:56:05
 * @LastEditors: vincent 1343327598@qq.com
 * @LastEditTime: 2022-08-11 11:00:39
 * @FilePath: /vincentvue/src/axios/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios"; //引入

let baseURL = "/change";

//这一步的目的是判断出当前是开发环境还是生成环境，方法不止一种，达到目的就行
// if(process.env.NODE_ENV=="development"){
//   baseURL=''
// }else{
//   baseURL=''
// }

let config = {
  baseURL: baseURL,
  timeout: 30000, //设置最大请求时间
};
const _axios = axios.create(config);

/* 请求拦截器（请求之前的操作） */
_axios.interceptors.request.use(
  (config) => {
    //如果有需要在这里开启请求时的loading动画效果
    config.headers.Authorization = ""; //添加token,需要结合自己的实际情况添加，
    return config;
  },
  (err) => Promise.reject(err)
);

/* 请求之后的操作 */
_axios.interceptors.response.use(
  (res) => {
    //在这里关闭请求时的loading动画效果
    //这里用于处理返回的结果，比如如果是返回401无权限，可能会是跳回到登录页的操作，结合自己的业务逻辑写
    if (res.data.code === 401) {
      console.log("无权限操作");
    }
    if (res.data.code === 400) {
      console.log("请求网络失败");
    }
    if (res.data.code === 404) {
      console.log("请求网络失败");
    }
    return res;
  },
  (err) => {
    if (err) {
      //在这里关闭请求时的loading动画效果
      console.log("请求网络失败");
    }
    return Promise.reject(err);
  }
);

//封装post,get方法
const http = {
  get(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        params,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        method: "GET",
      })
        .then((res) => {
          resolve(res.data);
          return res;
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  post(url = "", params = {}) {
    return new Promise((resolve, reject) => {
      _axios({
        url,
        data: params,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
        method: "POST",
      })
        .then((res) => {
          resolve(res.data);
          return res;
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default http;
