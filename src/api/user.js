import axios from "../utils/axios";

export function getUserInfo(data = {}) {
    return axios.get("/user/info", data);
}

// 根据登录接口传递
export function login(params) {
    return axios.post("user/login", params);
}

// 注册接口
export function register(params) {
    return axios.post("user/register", params);
}
/* export function getHome() {
  // 带参数：data = {} 因eslint报:assign but never used,故未写
  return axios.get('/index-infos'); // 接口：/api/v1/index-infos
} */