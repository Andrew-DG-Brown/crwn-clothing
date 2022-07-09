import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import { Link } from "react-router-dom";

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  Footer,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen, cartTotalPrice } =
    useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(!isCartOpen);
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
