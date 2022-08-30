import {
  CheckoutItemContainer,
  LeftTextContainer,
  Price,
} from "./checkout-item.styles";

import { QuantitySelectDropdown } from "../quantity-select-dropdown/quantity-select-dropdown.component";

import { addToWishlist } from "../../utils/firebase/firebase.utils";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { removeCartItem } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsSearchOpen } from "../../store/search/search.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { DeleteFromCart } from "../delete-from-cart-button/delete-from-cart-button.styles";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  const { name, imageUrl, price } = cartItem;

  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItems, cartItem));
  };

  // const addToWishlistHandler = () => {
  //   return currentUser
  //     ? addToWishlist(currentUserUid, cartItem)
  //     : "make popup modal";
  // };

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
        {/*<button>Add to wishlist</button>*/}
      </LeftTextContainer>

      <Price>${price} each</Price>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
