import { useState, Fragment } from "react";

//Styled Components
import {
  ProductCardContainer,
  Img,
  ProductButton,
  ContentContainer,
  Name,
  Price,
  TextContainer,
} from "./search-dropdown-product-card.styles";

import { DropdownModal } from "../dropdown-modal/dropdown-modal";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.actions";

export const SearchProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [addedToCart, setAddedToCart] = useState(false);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2500);
  };

  return (
    <Fragment>
      {addedToCart && <DropdownModal type="added-to-cart" productName={name} />}
      <ProductCardContainer>
        <Img src={imageUrl} alt={`${name}`} />
        <ContentContainer>
          <TextContainer>
            <Name>{name}</Name>
            <Price>${price.toFixed(2)}</Price>
          </TextContainer>
          <ProductButton
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCart}
          >
            Add to Cart
          </ProductButton>
        </ContentContainer>
      </ProductCardContainer>
    </Fragment>
  );
};
