import Vue from "vue";
import { Toast } from "vant";
import * as types from "./mutation-types";

const mutations = {
    [types.SET_SHOP_ID](state, id) {
        state.shopId = id;
    },

    [types.SET_STORE_LIST](state, list) {
        state.storeList = list;
    },

    [types.SET_INIT_LIST](state, { shopId, name, price }) {
        let store = state.storeList[shopId] || {};
        state.storeList[shopId] = {
            count: 1,
            shopId: shopId,
            name: name,
            price: price,
        };
        store = state.storeList[shopId]; // deep: store = JSON.parse(JSON.stringify(state.storeList[shopId])) */
        // console.log("mutation页面: storeList=====", state.storeList);
        return state.storeList;
    },

    [types.GET_CART_ADD](state, { shopId }) {
        if (state.storeList && state.storeList[shopId]) {
            state.storeList[shopId].count++;
            if (state.storeList[shopId].count >= 5) {
                Toast.fail("不能再加了噢~");
            }
        }
        return state.storeList;
    },
    [types.GET_CART_REDUCE](state, { shopId }) {
        if (state.storeList && state.storeList[shopId]) {
            state.storeList[shopId].count--;
            if (state.storeList[shopId].count === 1) {
                state.storeList[shopId].count = 1;
                Toast.fail("主人，不能再少了");
            }
        }
        return state.storeList;
    },
};

export default mutations;