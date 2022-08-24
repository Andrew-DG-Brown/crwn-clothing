//Redux
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";

//Styled Components
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartTotalQuantity = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const cartOpenToggle = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={cartOpenToggle}>
      <ShoppingIcon />
      {cartTotalQuantity > 0 && <ItemCount>{cartTotalQuantity}</ItemCount>}
    </CartIconContainer>
  );
};

export default CartIcon;
