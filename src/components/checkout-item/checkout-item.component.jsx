import {
  CheckoutItemContainer,
  QuantityContainer,
  DeleteButton,
} from "./checkout-item.styles";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCartQuantity,
  addItemToCart,
  removeCartItem,
} from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, quantity, imageUrl, price } = cartItem;

  const quantityIncrement = () => dispatch(addItemToCart(cartItems, cartItem));

  const minusOneHandler = () => {
    cartItem.quantity === 1
      ? dispatch(removeCartItem(cartItems, cartItem))
      : dispatch(decrementCartQuantity(cartItems, cartItem));
  };
  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItems, cartItem));
  };

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
