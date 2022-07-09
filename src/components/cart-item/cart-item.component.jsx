import {
  CartItemContainer,
  ItemDetails,
  Name,
  QuantityButtonsContainer,
} from "./cart-item.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ cartItem }) => {
  const { addItemToCart, decrementCartQuantity, removeCartItem } =
    useContext(CartContext);

  const { name, quantity, imageUrl, price } = cartItem;

  const plusOneQuantity = () => addItemToCart(cartItem);
  const minusOneQuantity = () => {
    cartItem.quantity === 1
      ? removeCartItem(cartItem)
      : decrementCartQuantity(cartItem);
  };

  return (
    <CartItemContainer>
      <img src={`${imageUrl}`} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
      <QuantityButtonsContainer>
        <button onClick={minusOneQuantity}>{`-`}</button>
        <button onClick={plusOneQuantity}>{`+`}</button>
      </QuantityButtonsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
