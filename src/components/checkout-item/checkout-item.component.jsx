import {
  CheckoutItemContainer,
  LeftTextContainer,
  Price,
} from "./checkout-item.styles";

import { QuantitySelectDropdown } from "../quantity-select-dropdown/quantity-select-dropdown.component";

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

  const { name, imageUrl, price } = cartItem;

  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer isSearchOpen={isSearchOpen} isCartOpen={isCartOpen}>
      <img src={`${imageUrl}`} alt={name} />
      <LeftTextContainer>
        <h2>{name}</h2>
        <div>
          <span>Quantity</span>
          <QuantitySelectDropdown cartItem={cartItem} cartItems={cartItems} />
        </div>

        <DeleteFromCart onClick={removeItemHandler}></DeleteFromCart>
      </LeftTextContainer>

      <Price>${price} each</Price>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
