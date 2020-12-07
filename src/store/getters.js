export const shopId = (state) => {
    state.shopId;
};

export const cartCount = (state) => {
    return state.cartCount;
};
export const sortCartCount = (state) => {
    return Object.values(state.storeList).length
};
export const storeList = (state) => {
    return state.storeList;
};

export const cartList = (state) => {
    return state.cartList;
};