import {
  ProductCardContainer,
  Img,
  ProductButton,
  Footer,
  Name,
  Price,
} from "./product-card.styles";
import AddToCartConfirm from "../add-to-cart-modal/AddToCartConfirm";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    addItemToCart(product);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <React.Fragment>
      {addedToCart && <AddToCartConfirm productName={name} />}
      <ProductCardContainer>
        <Img src={imageUrl} alt={`${name}`} />
        <Footer>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </Footer>
        <ProductButton
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to Cart
        </ProductButton>
      </ProductCardContainer>
    </React.Fragment>
  );
};

export default ProductCard;
