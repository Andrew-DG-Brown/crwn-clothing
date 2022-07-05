import {
  CheckoutItemContainer,
  QuantityContainer,
  DeleteButton,
} from "./checkout-item.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, decrementCartQuantity, removeCartItem } =
    useContext(CartContext);
  const { name, quantity, imageUrl, price } = cartItem;

  const quantityIncrement = () => addItemToCart(cartItem);

  const minusOneHandler = () => {
    cartItem.quantity === 1
      ? removeCartItem(cartItem)
      : decrementCartQuantity(cartItem);
  };
  const removeItemHandler = () => removeCartItem(cartItem);

  return (
    <CheckoutItemContainer>
      <img src={`${imageUrl}`} alt={name} />
      <h2>{name}</h2>
      <QuantityContainer>
        <button onClick={minusOneHandler}>&#10094;</button>
        <h2>{quantity}</h2>
        <button onClick={quantityIncrement}>&#10095;</button>
      </QuantityContainer>
      <h2>${price}</h2>
      <DeleteButton onClick={removeItemHandler}>&#10005;</DeleteButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
