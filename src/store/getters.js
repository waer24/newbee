import { getStore } from "./../api/utils.js";
import state from "./state.js";

const getters = {
    storeList: () => () => {
        // 用方法，保证每次调用都更新数据
        if (
            localStorage.getItem("storeList") === null || // null !== null，因此把null的情况放前面
            localStorage.getItem("storeList") === undefined
        ) {
            console.log("没有数据啦");
            return;
        } else {
            let list = JSON.parse(localStorage.getItem("storeList"));
            console.log("getters==>", list);
            return list;
        }
    },
};
export default getters;