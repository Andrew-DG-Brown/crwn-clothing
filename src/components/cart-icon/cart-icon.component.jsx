import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartTotalQuantity } =
    useContext(CartContext);

  const cartOpenToggle = () => {
    setIsCartOpen(!isCartOpen);

    console.log(isCartOpen);
  };

  return (
    <div onClick={cartOpenToggle} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotalQuantity}</span>
    </div>
  );
};

export default CartIcon;
