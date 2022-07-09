import React from "react";
import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles";

import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

/* 
    Refactor this to intake the categories data, watch Section 11, episode "last touches"
*/

const DirectoryItem = () => {
  const navigate = useNavigate();

  return categories.map(({ id, title, imageUrl, route }) => {
    const onNavigateHandler = () => {
      navigate(route);
    };
    return (
      <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl}>
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </BackgroundImage>
      </DirectoryItemContainer>
    );
  });
};

export default DirectoryItem;
