import * as types from "./mutation-types";

function initCart(state, { shopId, name, price }) {}
const mutations = {
    [types.SET_SHOP_ID](state, id) {
        state.shopId = id;
    },
    /*    [types.SET_CART_COUNT](state, count) {
                                                      state.cartCount = count;
                                                      for (let key in state.storeList) {
                                                          let allCount = state.storeList[key];
                                                          console.log("allCount", allCount);
                                                      }
                                                  }, */
    /*     [types.SET_CART_lIST](state, list) {
                                                                                                                                    state.cartList = list;
                                                                                                                                }, */
    [types.SET_STORE_LIST](state, list) {
        state.storeList = list;
    },
    // 将需要的参数通过公共属性添加进来
    [types.GET_CART_ADD](state, { shopId, name, price }) {
        if (state.storeList && state.storeList[shopId]) {
            state.storeList[shopId].count++;
        } else {
            let store = state.storeList[shopId] || {};
            state.storeList[shopId] = {
                count: 1,
                shopId: shopId,
                name: name,
                price: price,
            };
            state.cartCount = state.storeList[shopId].count;
            store = state.storeList[shopId]; // deep: store = JSON.parse(JSON.stringify(state.storeList[shopId])) */
        }
        return state;
    },
};

export default mutations;