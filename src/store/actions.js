import * as types from "./mutation-types";

// 首次点击初始化购物车列表
export const saveInitList = (
  { state, commit },
  { shopId, name, price, img, isCheck }
) => {
  commit(types.SET_IS_CHECKED, isCheck);
  commit(types.SET_INIT_LIST, { shopId, name, price, img, isCheck });
  // console.log("print--", state.storeList);
};

export const saveCheckAll = ({ state, commit }) => {
  commit(types.GET_SUM, 0);
  let isAllChecked = state.isAllChecked;
  commit(types.SET_IS_ALL_CHECKED, isAllChecked);
  return state.sum;
};

export const saveCheckOne = ({ state, commit }, index) => {
  commit(types.GET_SUM, 0); // 计算之前先清除总价数量
  commit(types.SET_IS_CHECKED, index);
};
