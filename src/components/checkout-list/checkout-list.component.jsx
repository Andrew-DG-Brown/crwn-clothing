import CheckoutItem from "../checkout-item/checkout-item.component";

//Redux
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  CheckoutListContainer,
  EmptyCart,
  Title,
} from "./checkout-list.styles";

const CheckoutItemList = () => {
  const cartItems = useSelector(selectCartItems);

  const cartIsEmpty = !cartItems[0];

  return (
    <CheckoutListContainer>
      <Title>Cart</Title>
      {cartIsEmpty && <EmptyCart>Your cart is empty</EmptyCart>}

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
    </CheckoutListContainer>
  );
};

export default CheckoutItemList;
