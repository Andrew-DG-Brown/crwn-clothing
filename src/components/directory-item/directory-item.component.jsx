import React from "react";
import {
  DirectoryItemContainer,
  BackgroundImage,
  TextContainer,
} from "./directory-item.styles";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import { selectIsSearchOpen } from "../../store/search/search.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/ypR0vtC/hats.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/fr9yy5r/jackets.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/ZgMBXTW/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/R9m3B1g/womens.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/QkbpHf6/mens.jpg",
    route: "shop/mens",
  },
];

/* 
    Refactor this to intake the categories data, watch Section 11, episode "last touches"
*/

const DirectoryItems = () => {
  const navigate = useNavigate();
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const isCartOpen = useSelector(selectIsCartOpen);

  return categories.map(({ id, title, imageUrl, route }) => {
    const onNavigateHandler = () => {
      navigate(route);
    };
    return (
      <DirectoryItemContainer
        key={id}
        onClick={onNavigateHandler}
        isSearchOpen={isSearchOpen}
        isCartOpen={isCartOpen}
      >
        <BackgroundImage imageUrl={imageUrl}>
          <TextContainer>
            <h2>{title}</h2>
            <p>Shop Now &#x279C;</p>
          </TextContainer>
        </BackgroundImage>
      </DirectoryItemContainer>
    );
  });
};

export default DirectoryItems;
