import axios from "../utils/axios";

export function getUserInfo(data = {}) {
    return axios.get("/user/info", data);

}

/* export function getHome() {
  // 带参数：data = {} 因eslint报:assign but never used,故未写
  return axios.get('/index-infos'); // 接口：/api/v1/index-infos
} */