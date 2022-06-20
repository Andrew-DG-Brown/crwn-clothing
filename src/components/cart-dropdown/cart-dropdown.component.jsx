import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import { Link } from "react-router-dom";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const closeCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <Link to="/checkout">
        <Button onClick={closeCart}>Go to checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
