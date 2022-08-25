import {
  CartItemContainer,
  ItemDetails,
  Name,
  QuantityButtonsContainer,
  Img,
} from "./cart-item.styles";

//Redux
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartQuantity,
  removeCartItem,
  addItemToCart,
} from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, quantity, imageUrl, price } = cartItem;

  const plusOneQuantity = () => dispatch(addItemToCart(cartItems, cartItem));
  const minusOneQuantity = () => {
    cartItem.quantity === 1
      ? dispatch(removeCartItem(cartItems, cartItem))
      : dispatch(decrementCartQuantity(cartItems, cartItem));
  };

  return (
    <CartItemContainer>
      <Img imageUrl={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
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
