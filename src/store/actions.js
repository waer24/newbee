import * as types from './mutation-types';

export const saveCart = ({ commit }, count) => {
    commit(types.GET_CART_ADD);
    commit(types.SET_CART_COUNT, count)
}