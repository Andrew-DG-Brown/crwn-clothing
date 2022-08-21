import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { setIsCartOpen, cartTotalQuantity, isCartOpen } =
    useContext(CartContext);

  const cartOpenToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={cartOpenToggle}>
      <ShoppingIcon />
      {cartTotalQuantity > 0 && <ItemCount>{cartTotalQuantity}</ItemCount>}
    </CartIconContainer>
  );
};

export default CartIcon;
