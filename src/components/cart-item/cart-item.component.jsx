import { useState } from "react";

import { CartItemContainer, ItemDetails, Name, Img } from "./cart-item.styles";
import { QuantitySelectDropdown } from "../quantity-select-dropdown/quantity-select-dropdown.component";
import { DeleteFromCart } from "../delete-from-cart-button/delete-from-cart-button.styles";
import { LoadingSpinner } from "../loading-spinner/loading-spinner.component";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const [justRemoved, setJustRemoved] = useState(false);

  const { name, imageUrl, price } = cartItem;

  const removeItemHandler = () => {
    setJustRemoved(true);
    setTimeout(() => {
      dispatch(removeCartItem(cartItems, cartItem));
      setJustRemoved(false);
    }, 900);
  };

  return (
    <CartItemContainer justRemoved={justRemoved}>
      <Img imageUrl={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <div>
          <QuantitySelectDropdown cartItem={cartItem} cartItems={cartItems} /> x
          <span> ${price}</span>
        </div>
      </ItemDetails>
      {justRemoved ? (
        <LoadingSpinner />
      ) : (
        <DeleteFromCart onClick={removeItemHandler}>&#10005;</DeleteFromCart>
      )}
    </CartItemContainer>
  );
};

export default CartItem;
