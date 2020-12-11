const getters = {
    storeList: (state) => state.storeList,

    cartList: (state) => state.cartList,

    sortCartCount: (state) => () => {
        // 函数的写法
        let len = Object.keys(state.storeList).length;
        console.log(len);
        return len;
    },
};

export default getters;