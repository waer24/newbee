import axios from '../utils/axios';

/* elmApp demo
export function searchAddress(data = {}) {
  const url = host + '/v1/pois'
  return axios.get(url, {
    params: data
  }).then((res) => {
    return res
  }).catch((e) => {
    console.log(e)
  })
}
*/
export function getHome() {
  // 带参数：data = {} 因eslint报:assign but never used,故未写
  return axios.get('/index-infos'); // 接口：/api/v1/index-infos
}

