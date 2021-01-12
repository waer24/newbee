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
            // 重新赋值
            let list = JSON.parse(localStorage.getItem("storeList")); // 从localstorage中取值
            // console.log("getters---", list);
            return list;
        }
    },
    cartCount: (state) => {
        // console.log(state.cartCount);
        return state.cartCount;
    },
};
export default getters;