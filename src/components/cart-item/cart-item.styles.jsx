import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 30px;
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

export const RemoveButton = styled.button`
  margin: 0px;

  width: 45px;
  height: 45px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px 7.5px 5.5px;
  background-color: rgba(211, 211, 211, 0.4);
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
