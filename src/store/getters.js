import state from "./state";

const getters = {
  // 用发放调用，保证每次都更新值
  /*   storeList: () => () => {
    return (
      localStorage.getItem("storeList") ??
      JSON.parse(localStorage.getItem("storeList"))
    );
  }, */
  cartCount: (state) => state.cartCount,

  storeList: (state) => state.storeList,
  sum: (state) => state.sum,
  isAllChecked: (state) => state.isAllChecked,
  isCheck: (state) => state.isCheck,
};
export default getters;
