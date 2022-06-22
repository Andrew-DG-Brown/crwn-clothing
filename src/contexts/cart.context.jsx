import { useState, createContext, useEffect } from "react";

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

// =================== Cart Provider ====================

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decrementCartQuantity = (productToDecrement) => {
    setCartItems(decreaseCartQuantity(cartItems, productToDecrement));
  };

  const removeCartItem = (productToRemove) => {
    setCartItems(popCartItem(cartItems, productToRemove));
  };

  //depending on cartItems array changing, will reduce the total quantity of items & total their prices
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accum, cartItem) => accum + cartItem.quantity,
      0
    );

    setCartTotalQuantity(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((accum, cartItem) => {
      return accum + cartItem.price * cartItem.quantity;
    }, 0);

    setCartTotalPrice(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartTotalQuantity,
    decrementCartQuantity,
    removeCartItem,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
