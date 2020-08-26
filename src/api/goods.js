import axios from './../utils/axios';

export function goodsDetail() {
    return axios.get('goods/detail')
}