import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, decrementCartQuantity, removeCartItem } =
    useContext(CartContext);
  const { name, quantity, imageUrl, price } = cartItem;

  const quantityIncrement = () => addItemToCart(cartItem);
  const minusOneHandler = () => decrementCartQuantity(cartItem);
  const removeItemHandler = () => removeCartItem(cartItem);

  return (
    <div className="checkout-item-container">
      <img className="product-image" src={`${imageUrl}`} alt={name} />
      <h2>{name}</h2>
      <div className="quantity-container">
        <button onClick={minusOneHandler}>{`<`}</button>
        <span>{quantity}</span>
        <button onClick={quantityIncrement}>{`>`}</button>
      </div>
      <h2 className="price">${price}</h2>
      <button onClick={removeItemHandler}>X</button>
    </div>
  );
};

export default CheckoutItem;
