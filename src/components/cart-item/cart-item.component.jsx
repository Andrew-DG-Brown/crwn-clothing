import "./cart-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartItem = ({ cartItem }) => {
  const { addItemToCart, decrementCartQuantity } = useContext(CartContext);

  const { name, quantity, imageUrl, price } = cartItem;

  const plusOneQuantity = () => addItemToCart(cartItem);
  const minusOneQuantity = () => decrementCartQuantity(cartItem);

  return (
    <div className="cart-item-container">
      <img src={`${imageUrl}`} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
      <div className="quantity-buttons-container">
        <button onClick={minusOneQuantity}>{`-`}</button>
        <button onClick={plusOneQuantity}>{`+`}</button>
      </div>
    </div>
  );
};

export default CartItem;
