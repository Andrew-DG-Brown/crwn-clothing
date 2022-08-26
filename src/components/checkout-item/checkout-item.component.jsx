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
  changeCartItemQuantity,
} from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, quantity, imageUrl, price } = cartItem;

  // const quantityIncrement = () => dispatch(addItemToCart(cartItems, cartItem));

  // const minusOneHandler = () => {
  //   cartItem.quantity === 1
  //     ? dispatch(removeCartItem(cartItems, cartItem))
  //     : dispatch(decrementCartQuantity(cartItems, cartItem));
  // };

  const removeItemHandler = () => {
    dispatch(removeCartItem(cartItems, cartItem));
  };

  const changeQuantityHandler = (eventInput) => {
    const newQuantity = parseInt(eventInput);
    dispatch(changeCartItemQuantity(cartItems, cartItem, newQuantity));
  };

  return (
    <CheckoutItemContainer>
      <img src={`${imageUrl}`} alt={name} />
      <h2>{name}</h2>
      <QuantityContainer>
        <input
          type="number"
          value={quantity}
          onChange={(e) => changeQuantityHandler(e.target.value)}
        />
      </QuantityContainer>
      <h2>${price}</h2>
      <DeleteButton onClick={removeItemHandler}>&#10005;</DeleteButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
