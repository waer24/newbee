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

  [types.SET_ITEM_COUNT](state, index, val) {
    if (state.storeList[index]) {
      state.storeList[index].count = val;
      console.log("mutation print--", state.storeList[index]);
    }
  },
  // 计算总价
  [types.GET_SUM](state, sum) {
    state.sum = sum;
  },

  // 全选设置
  [types.SET_IS_ALL_CHECKED](state) {
    state.sum = 0;
    state.isAllChecked = !state.isAllChecked;
    state.storeList.forEach((value) => {
      value.isCheck = state.isAllChecked;
      state.sum += value.price * value.count;
    });
    if (!state.isAllChecked) {
      state.sum = 0;
    }
  },
  // 单选设置
  [types.SET_IS_CHECKED](state, index) {
    if (state.storeList && state.storeList[index]) {
      state.storeList[index].isCheck = !state.storeList[index].isCheck;
      state.isAllChecked = !state.storeList.some((item) => !item.isCheck); // some 只要一个item满足条件即可
      for (let i in state.storeList) {
        if (state.storeList[i].isCheck) {
          state.sum += state.storeList[i].count * state.storeList[i].price;
        }
      }
    }
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
      // console.log(state.cartCount);
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
      if (state.storeList[index].isCheck) {
        state.sum +=
          state.storeList[index].price * state.storeList[index].count;
      }
    } else {
      Toast.fail("主人，不能再加啦");
    }
    return state.sum && state.storeList;
  },

  //  购物车减少商品
  [types.GET_CART_REDUCE](state, index) {
    if (
      state.storeList &&
      state.storeList[index] &&
      state.storeList[index].count !== 1
    ) {
      state.storeList[index].count--;
      if (state.storeList[index].isCheck) {
        state.sum +=
          state.storeList[index].price * state.storeList[index].count;
      }
    } else {
      state.storeList[index].count = 1;
      Toast.fail("主人，不能再少了");
    }
    return state.sum && state.storeList;
  },
};

export default mutations;
