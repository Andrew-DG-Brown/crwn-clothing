import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectIsCartOpen,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";

//Router
import { Link } from "react-router-dom";

//Styled Components
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  Footer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotal);

  const closeCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  const cartIsEmpty = !cartItems[0];

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartIsEmpty && <EmptyMessage>Your cart is empty</EmptyMessage>}

        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </CartItems>
      <Footer>
        <Link to="/checkout">
          <Button onClick={closeCart}>Go to checkout</Button>
        </Link>
        <h2>Total: ${cartTotalPrice}</h2>
      </Footer>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
