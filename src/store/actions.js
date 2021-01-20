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
    let isAllChecked = state.isAllChecked;
    commit(types.SET_IS_ALL_CHECKED, isAllChecked);

    commit(types.GET_SUM);
};

export const saveCheckOne = ({ state, commit }, index) => {
    let isAllChecked = state.isAllChecked;
    commit(types.SET_IS_CHECKED, index);
    commit(types.GET_SUM);
};

export const saveCartAdd = ({ state, commit }, index) => {
    commit(types.GET_CART_ADD, index);
    commit(types.GET_SUM);
};

export const saveCartReduce = ({ state, commit }, index) => {
    commit(types.GET_CART_REDUCE, index);
    commit(types.GET_SUM);
};
export const saveChangeCount = ({ state, commit }, { index, val }) => {
    commit(types.SET_ITEM_COUNT, { index, val });
    commit(types.GET_SUM);
};

export const saveCartDelete = ({ state, commit }, { index }) => {
    commit(types.GET_CART_DELETE, index);
    commit(types.GET_SUM);
}