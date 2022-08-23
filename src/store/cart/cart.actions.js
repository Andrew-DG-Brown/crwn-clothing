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

//decrement item quantity
const decreaseCartQuantity = (cartItems, productToDecrement) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === productToDecrement.id;
  });

  if (existingCartItem) {
    return cartItems.map((item) => {
      if (item.quantity === 1) {
        return { ...item, quantity: 1 };
      } else if (item.id === productToDecrement.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }
};

//remove item from cart
const popCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => {
    return item.id !== productToRemove.id;
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

export const decrementCartQuantity = (cartItems, productToDecrement) => {
  const newCartItems = decreaseCartQuantity(cartItems, productToDecrement);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (cartItems, productToRemove) => {
  const newCartItems = popCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
