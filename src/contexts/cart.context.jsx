import { useState, createContext, useEffect, useReducer } from "react";

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

// =================== Cart Context ====================

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotalQuantity: 0,
  addToTotalCartQuantity: () => {},
  cartTotalPrice: 0,
  setCartTotalPrice: () => {},
});

// === Reducer code START ===
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: true,
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

// === Reducer code END ===

// =================== Cart Provider ====================

export const CartProvider = ({ children }) => {
  // === Reducer START ===

  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { isCartOpen, cartItems, cartTotalQuantity, cartTotalPrice } = state;

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (accum, cartItem) => accum + cartItem.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce((accum, cartItem) => {
      return accum + cartItem.price * cartItem.quantity;
    }, 0);

    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        cartTotalPrice: newCartTotal,
        cartTotalQuantity: newCartCount,
      },
    });
  };

  // helper functions

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const decrementCartQuantity = (productToDecrement) => {
    const newCartItems = decreaseCartQuantity(cartItems, productToDecrement);
    updateCartItemsReducer(newCartItems);
  };

  const removeCartItem = (productToRemove) => {
    const newCartItems = popCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  // === Reducer END ===

  const value = {
    isCartOpen,
    setIsCartOpen: () => {},
    addItemToCart,
    cartItems,
    cartTotalQuantity,
    decrementCartQuantity,
    removeCartItem,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
