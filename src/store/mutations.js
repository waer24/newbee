import Vue from "vue";
import { Toast } from "vant";
import * as types from "./mutation-types";
import { setStore } from "./../api/utils";
const mutations = {
    [types.SET_SHOP_ID](state, id) {
        state.shopId = id;
    },

    [types.SET_STORE_LIST](state, list) {
        state.storeList = list;
    },

    [types.SET_INIT_LIST](state, { shopId, name, price, img, isCheck }) {
        let store = state.storeList[shopId] || {};

        state.storeList[shopId] = {
            count: 1,
            shopId: shopId,
            name: name,
            price: price,
            img: img,
            isCheck: isCheck,
        };
        store = state.storeList[shopId];
        localStorage.setItem("storeList", JSON.stringify(state.storeList));

        // setStore("storeList", state.storeList);
        // console.log("mutation", state.storeList);
        return state.storeList;
    },

    [types.GET_CART_ADD](state, { shopId }) {
        if (state.storeList && state.storeList[shopId]) {
            state.storeList[shopId].count++;
            if (state.storeList[shopId].count >= 5) {
                Toast.fail("不能再加了噢~");
            }
        }
        localStorage.setItem("storeList", JSON.stringify(state.storeList));
        console.log("mutation:", state.storeList);
        return state.storeList;
    },

    [types.GET_CART_REDUCE](state, { shopId }) {
        console.log(state.storeList);
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