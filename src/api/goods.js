import axios from "./../utils/axios";

export function goodsDetail(id) {
    return axios.get(`goods/detail/${id}`);
}