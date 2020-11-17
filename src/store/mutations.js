import * as types from "./mutation-types";

export default {
    [types.SET_SHOP_ID](state, id) {
        state.shopId = id;
    },
    [types.SET_CART_COUNT](state, count) {
        state.cartCount = count;
        for (let key in state.storeList) {
            let allCount = state.storeList[key];
            console.log("allCount", allCount);
        }
    },
    /*     [types.SET_CART_lIST](state, list) {
                                                                                state.cartList = list;
                                                                            }, */
    [types.SET_STORE_LIST](state, list) {
        state.storeList = list;
    },
    // 将需要的参数通过公共属性添加进来
    [types.GET_CART_ADD](state, { shopId, name, price }) {
        if (state.storeList && state.storeList[shopId]) {
            state.storeList[shopId].num++;
        } else {
            let store = state.storeList[shopId] || {};
            // 效果图：10284:{}
            state.storeList[shopId] = {
                // 报undefined， 我需要插入一些属性在这个对象中，如何插入呢？
                num: 1,
                id: shopId,
                name: name,
                price: price,
            };
            store = state.storeList[shopId]; // deep: store = JSON.parse(JSON.stringify(state.storeList[shopId]))
            console.log(store);
            console.log(state.storeList);
        }

        state.cartCount += state.storeList[shopId].num;
        console.log(state.cartCount);
        return state.cartCount;
    },
};