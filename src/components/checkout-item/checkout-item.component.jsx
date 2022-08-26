import {
  CheckoutItemContainer,
  QuantityContainer,
  DeleteButton,
} from "./checkout-item.styles";

import { QuantitySelectDropdown } from "../quantity-select-dropdown/quantity-select-dropdown.component";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsSearchOpen } from "../../store/search/search.selector";

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
      <h2>{name}</h2>
      <QuantityContainer>
        <QuantitySelectDropdown cartItem={cartItem} cartItems={cartItems} />
      </QuantityContainer>
      <h2>${price}</h2>
      <DeleteButton onClick={removeItemHandler}>&#10005;</DeleteButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
