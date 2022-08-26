import { useDispatch } from "react-redux";
import { changeCartItemQuantity } from "../../store/cart/cart.actions";

import { QuantitySelect } from "./quantity-select-dropdown.styles";

export const QuantitySelectDropdown = ({ cartItem, cartItems }) => {
  const dispatch = useDispatch();

  const changeQuantityHandler = (selectValue) => {
    const newQuantity = parseInt(selectValue);
    dispatch(changeCartItemQuantity(cartItems, cartItem, newQuantity));
  };
  return (
    <div>
      <QuantitySelect
        name="quantity"
        value={cartItem.quantity}
        onChange={(e) => changeQuantityHandler(e.target.value)}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </QuantitySelect>
    </div>
  );
};
