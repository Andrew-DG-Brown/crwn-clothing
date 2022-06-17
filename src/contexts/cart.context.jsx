import { useState, createContext, useEffect } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotalQuantity: 0,
  addToTotalCartQuantity: () => {},
});

// {
//   name: "",
//   price: 0,
//   imageUrl: '',
//   quantity: 0,
// }

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  //depending on cartItems array changing, will reduce the total quantity of items
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (accum, cartItem) => accum + cartItem.quantity,
      0
    );
    setCartTotalQuantity(newCartCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartTotalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
