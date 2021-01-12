import * as types from "./mutation-types";
const mutations = {
    [types.SET_SHOP_ID](state, id) {
        state.shopId = id;
    },

    [types.SET_STORE_LIST](state, list) {
        state.storeList = list;
    },

    [types.SET_INIT_LIST](state, { shopId, name, price, img, isCheck }) {
        //   let store = state.storeList[shopId] || {};
        state.storeList[shopId] = {
            count: 1,
            shopId: shopId,
            name: name,
            price: price,
            img: img,
            isCheck: isCheck,
        };
        // store = state.storeList[shopId];
        localStorage.setItem("storeList", JSON.stringify(state.storeList));
        return state.storeList;
    },
    [types.SET_CART_COUNT](state) {
        if (
            localStorage.getItem("storeList") === null || // null !== null，因此把null的情况放前面
            localStorage.getItem("storeList") === undefined
        ) {
            console.log("没有数据啦");
            return;
        } else {
            let list = JSON.parse(localStorage.getItem("storeList")); // 从localstorage中取值
            // console.log(list);
            // 重新赋值
            state.cartCount = Object.keys(list).length; // 从localstorage中取值
            // console.log("mutation---", state.cartCount);
            return state.cartCount;
        }
    },
    /*    需求要刷新后，保证添加的数量还在，从本地存取数据，不需要mutation传递了
                         [types.GET_CART_ADD](state, { shopId }) {
                                let list = JSON.parse(localStorage.getItem("storeList"));
                                if (list && list[shopId]) {
                                    list[shopId].count < 5 ?
                                        list[shopId].count++
                                        :
                                        Toast.fail("主人，不能再加啦");
                                }
                                localStorage.setItem("storeList", JSON.stringify(list));
                                // console.log("mutation:", list[shopId]);
                                return list;
                            },

                            [types.GET_CART_REDUCE](state, { shopId }) {
                                // state有隐形的用到，不能删除
                                let list = JSON.parse(localStorage.getItem("storeList"));
                                if (list && list[shopId]) {
                                    // console.log(list[shopId]);
                                    if (list[shopId].count === 1) {
                                        list[shopId].count = 1;
                                        Toast.fail("主人，不能再少了");
                                        return;
                                    } else {
                                        list[shopId].count--;
                                    }
                                }

                                localStorage.setItem("storeList", JSON.stringify(list));
                                // console.log(list[shopId]);
                                return list;
                            }, */
};

export default mutations;