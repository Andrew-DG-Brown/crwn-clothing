import { useState } from "react";
import {
  CheckoutItemContainer,
  LeftTextContainer,
  Price,
} from "./checkout-item.styles";

import { QuantitySelectDropdown } from "../quantity-select-dropdown/quantity-select-dropdown.component";
import { LoadingSpinner } from "../loading-spinner/loading-spinner.component";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsSearchOpen } from "../../store/search/search.selector";

import { DeleteFromCart } from "../delete-from-cart-button/delete-from-cart-button.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const isCartOpen = useSelector(selectIsCartOpen);

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
    <CheckoutItemContainer
      isSearchOpen={isSearchOpen}
      isCartOpen={isCartOpen}
      justRemoved={justRemoved}
    >
      <img src={`${imageUrl}`} alt={name} />
      <LeftTextContainer>
        <h2>{name}</h2>
        <div>
          <span>Quantity</span>
          <QuantitySelectDropdown cartItem={cartItem} cartItems={cartItems} />
        </div>

        {justRemoved ? (
          <LoadingSpinner />
        ) : (
          <DeleteFromCart onClick={removeItemHandler}></DeleteFromCart>
        )}
      </LeftTextContainer>

      <Price>${price} each</Price>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
