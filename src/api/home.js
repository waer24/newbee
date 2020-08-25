import axios from '../utils/axios';

export function getHome() {
  return axios.get('/index-infos'); // 接口：/api/v1/index-infos
}
