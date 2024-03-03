// ActionCreator.js
import { ADD_TO_CART, PRODUCTS, REMOVE_FROM_CART } from "./ActionTypes";

export const fetchingProducts = (data) => ({
  type: PRODUCTS,
  payload: data
});


export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});