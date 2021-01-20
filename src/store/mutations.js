import * as types from "./mutation-types";
import { Toast } from "vant";
import state from "./state";
const mutations = {
    [types.SET_SHOP_ID](state, id) {
        state.shopId = id;
    },

    [types.SET_STORE_LIST](state, list) {
        state.storeList = list;
    },

    [types.SET_ITEM_COUNT](state, { index, val }) {
        if (state.storeList[index]) {
            state.storeList[index].count = val;
        }
    },
    // 计算选中item的总价
    [types.GET_SUM](state) {
        state.sum = 0;
        for (let value of state.storeList) {
            if (value.isCheck) {
                state.sum += value.count * value.price;
            }
        }
        return state.sum;
    },

    // 单选设置
    [types.SET_IS_CHECKED](state, index) {
        if (state.storeList && state.storeList[index]) {
            state.storeList[index].isCheck = !state.storeList[index].isCheck;
            state.isAllChecked = !state.storeList.some((item) => !item.isCheck); // some 只要一个item满足条件即可
        }
    },

    // 全选设置
    [types.SET_IS_ALL_CHECKED](state) {
        state.isAllChecked = !state.isAllChecked;
    },

    // 购物车初始化
    [types.SET_INIT_LIST](state, { shopId, name, price, img, isCheck }) {
        // state.storeList[shopId] = {....} 带有key，value的形式,适用于storeList为对象
        let obj = {
            count: 1,
            shopId: shopId,
            name: name,
            price: price,
            img: img,
            isCheck: isCheck,
        };
        let isDuplicate = false; // 是否存在重复的item
        state.storeList.map((value) => {
            if (value.shopId === shopId) {
                isDuplicate = true;
                return;
            }
        });
        !isDuplicate && state.storeList.push(obj);
        return state.storeList;
    },

    // 设置购物车的数量
    [types.SET_CART_COUNT](state) {
        if (state.storeList && state.storeList.length !== 0) {
            state.cartCount = state.storeList.length;
            return state.cartCount;
        }
    },

    // 购物车添加商品
    [types.GET_CART_ADD](state, index) {
        if (
            state.storeList &&
            state.storeList[index] &&
            state.storeList[index].count < 5
        ) {
            state.storeList[index].count++;
        } else {
            Toast.fail("主人，不能再加啦");
        }
        return state.storeList.count;
    },

    //  购物车减少商品
    [types.GET_CART_REDUCE](state, index) {
        if (
            state.storeList &&
            state.storeList[index] &&
            state.storeList[index].count !== 1
        ) {
            state.storeList[index].count--;

        } else {
            state.storeList[index].count = 1;
            Toast.fail("主人，不能再少了");
        }
        return state.storeList.count;
    },
    // 购物车删除
    [types.GET_CART_DELETE](state, index) {

        state.storeList.splice(index, 1);
        console.log(state.storeList);

    }
};

export default mutations;
