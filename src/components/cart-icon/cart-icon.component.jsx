import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartTotalQuantity } =
    useContext(CartContext);

  const cartOpenToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={cartOpenToggle}>
      <ShoppingIcon />
      <ItemCount>{cartTotalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
