import CheckoutItem from "../checkout-item/checkout-item.component";

//Redux
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import {
  CheckoutListContainer,
  EmptyCart,
  CartTotalPriceContainer,
  CartTotalPrice,
} from "./checkout-list.styles";

const CheckoutList = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotal);

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
