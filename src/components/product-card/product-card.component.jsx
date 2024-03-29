//Styled Components
import {
  ProductCardContainer,
  Img,
  ProductButton,
  Footer,
  Name,
  Price,
  QuantityInCart,
  RemoveContainer,
} from "./product-card.styles";
import { DeleteFromCart } from "../delete-from-cart-button/delete-from-cart-button.styles";

import { useState, Fragment } from "react";

import { DropdownModal } from "../dropdown-modal/dropdown-modal";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.actions";
import { selectCurrentCartItemQuantity } from "../../store/cart/cart.selector";
import { removeCartItem } from "../../store/cart/cart.actions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const productQuantityInCart = useSelector(
    selectCurrentCartItemQuantity(product)
  );
  const [addedToCart, setAddedToCart] = useState(false);
  const [hoveringQuantity, setHoveringQuantity] = useState(false);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2500);
  };

  const removeItem = () => {
    dispatch(removeCartItem(cartItems, product));
    setHoveringQuantity(false);
  };

  const hovering = () => {
    setHoveringQuantity(true);
  };

  const notHovering = () => {
    setHoveringQuantity(false);
  };

  return (
    <Fragment>
      {addedToCart && <DropdownModal type="added-to-cart" productName={name} />}
      <ProductCardContainer>
        {productQuantityInCart && (
          <QuantityInCart
            onMouseEnter={hovering}
            onMouseLeave={notHovering}
            hovering={hoveringQuantity}
          >
            {!hoveringQuantity ? (
              <Fragment>
                <span>{productQuantityInCart}</span> <p>in your cart</p>
              </Fragment>
            ) : (
              <RemoveContainer>
                <span>Remove item from cart</span>
                <DeleteFromCart onClick={removeItem} />
              </RemoveContainer>
            )}
          </QuantityInCart>
        )}
        <Img src={imageUrl} alt={`${name}`} />
        <Footer>
          <Name>{name}</Name>
          <Price>${price.toFixed(2)}</Price>
        </Footer>
        <ProductButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to Cart
        </ProductButton>
      </ProductCardContainer>
    </Fragment>
  );
};

export default ProductCard;
