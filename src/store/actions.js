import * as types from "./mutation-types";

// 首次点击初始化购物车列表
export const saveInitList = ({ state, commit }, { shopId, name, price, img, isCheck }) => {
    commit(types.SET_IS_CHECKED, isCheck);
    commit(types.SET_INIT_LIST, { shopId, name, price, img, isCheck });
    // console.log("print--", state.storeList);
};

export const saveCheckAll = ({ state, commit }, index) => {
    // console.log(state.storeList);
    commit(types.GET_SUM, 0);
    let isAllChecked = state.isAllChecked;
    commit(types.SET_IS_ALL_CHECKED, isAllChecked);




    /*    if (isChecked) {
           // 全选选中，所有item自动选中
           state.storeList.map((value) => {
               commit(types.SET_IS_CHECKED, index);

               commit(types.GET_SUM, state.sum + value.price * value.count);
           });
       } else {
           state.storeList.map((value) => {
               // 全选取消，所有item自动不选中
               commit(types.SET_IS_CHECKED, indx);
           });
       } */
    return state.sum;
};

export const saveCheckOne = ({ state, commit }, index) => {
    commit(types.GET_SUM, 0); // 计算之前先清除总价数量
    commit(types.SET_IS_CHECKED, index)
    /* state.storeList.every((value) => {
        if (value.isCheck) {
            commit(types.SET_IS_ALL_CHECKED, true); // 只有所有的勾选，全选激活
            commit(types.GET_SUM, state.sum + value.price * value.count);
        }
    });
    state.storeList.some((value) => {
        if (!value.isCheck) {
            commit(types.SET_IS_ALL_CHECKED, false); // 只要一个不勾选，全选取消
            commit(types.GET_SUM, state.sum + value.price * value.count);
        }
    });
    return state.sum; */
};