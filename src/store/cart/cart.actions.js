import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

// =========== Helper Functions ==========

//add item to cart w/ quantity updates
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//remove item from cart
const popCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => {
    return item.id !== productToRemove.id;
  });
};

//change cart item quantity count
const changeItemQuantity = (cartItems, product, quantity) => {
  return cartItems.map((item) => {
    if (item.name === product.name) {
      return { ...item, quantity: quantity };
    } else if (item.quantity === 0) {
    }
    return item;
  });
};

// ===== Actions =====

export const setIsCartOpen = (bool) => {
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = popCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const changeCartItemQuantity = (cartItem, product, quantity) => {
  const newCartItems = changeItemQuantity(cartItem, product, quantity);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
