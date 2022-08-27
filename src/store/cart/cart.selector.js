import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;
const addTax = 0.13;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((accum, cartItem) => {
    return accum + cartItem.price * cartItem.quantity;
  }, 0)
);

export const selectCurrentCartItemQuantity = (product) =>
  createSelector([selectCartItems], (cartItems) => {
    const item = cartItems.find((item) => {
      return item.name === product.name;
    });
    return item ? item.quantity : null;
  });

export const selectCartTotalTax = createSelector(
  [selectCartTotal],
  (cartTotal) => {
    return cartTotal * addTax;
  }
);
