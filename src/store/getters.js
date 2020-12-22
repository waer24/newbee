import { getStore } from "./../api/utils.js";
import state from "./state.js";

const getters = {
    storeList: () => () => {
        // 用
        return JSON.parse(localStorage.getItem("storeList"));

        //return getStore("storeList");
    },

    sortCartCount: (state) => () => {
        // 函数的写法
        let len = Object.keys(state.storeList).length;
        console.log("len", len);
        return len;
    },
};

export default getters;