// reducer.js
import { ADD_TO_CART, PRODUCTS, REMOVE_FROM_CART } from "./ActionTypes";

const initialState = {
  products: [],
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS:
      return {
        ...state,
        products: action.data
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload) // Remove the item with the matching ID from the cart
      };
    default:
      return state;
  }
};

export default reducer;