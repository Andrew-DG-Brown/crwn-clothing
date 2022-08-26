import {
  CartItemContainer,
  ItemDetails,
  Name,
  QuantityButtonsContainer,
  Img,
  RemoveButton,
} from "./cart-item.styles";
import { QuantitySelectDropdown } from "../quantity-select-dropdown/quantity-select-dropdown.component";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price } = cartItem;

  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItems, cartItem));
  };

  return (
    <CartItemContainer>
      <Img imageUrl={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <div>
          <QuantitySelectDropdown cartItem={cartItem} cartItems={cartItems} /> x
          <span> ${price}</span>
        </div>
      </ItemDetails>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
