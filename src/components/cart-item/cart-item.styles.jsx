import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 30px;
  opacity: ${({ justRemoved }) => (justRemoved ? "0.4" : "1")};
`;

export const Img = styled.div`
  width: 70px;
  height: 70px;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;

  background-position: center;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;

  align-items: center;
  padding: 10px 20px;
  div {
    display: flex;
    width: 90px;
  }
`;

export const Name = styled.span`
  width: 70px;
  font-weight: bold;
`;
