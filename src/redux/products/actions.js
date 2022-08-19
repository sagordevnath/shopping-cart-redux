import { ADD_TO_CART_FIRST, DECREASE_TO_CART } from "./actionTypes";

//add product
export const addProduct = (id, quantity) => {
  return {
    type: ADD_TO_CART_FIRST,
    payload: {
        id,
        quantity,
    },
  };
}

// decrease quantity of product
export const decreaseProduct = (id, quantity) => {
  return {
    type: DECREASE_TO_CART,
    payload: {
        id,
        quantity,
    },
  };
}