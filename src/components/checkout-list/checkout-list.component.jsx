import CheckoutItem from "../checkout-item/checkout-item.component";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import {
  CheckoutListContainer,
  EmptyCart,
  CartTotalPriceContainer,
  CartTotalPrice,
} from "./checkout-list.styles";

const CheckoutList = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);

  const cartIsEmpty = !cartItems[0];

  return (
    <CheckoutListContainer>
      {cartIsEmpty && <EmptyCart>Your cart is empty</EmptyCart>}

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <CartTotalPriceContainer>
        <span>Total:</span>
        <CartTotalPrice>${cartTotalPrice}</CartTotalPrice>
      </CartTotalPriceContainer>
    </CheckoutListContainer>
  );
};

export default CheckoutList;
