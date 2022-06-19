import CheckoutItem from "../checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutList = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  return (
    <div className="checkout-list-container">
      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <div className="cart-total-price-container">
        <span>Total:</span>
        <span className="cart-total-price">${cartTotalPrice}</span>
      </div>
    </div>
  );
};

export default CheckoutList;
