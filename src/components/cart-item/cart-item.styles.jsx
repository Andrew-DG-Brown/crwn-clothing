import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = styled.span`
  width: 70px;
  font-weight: bold;
`;

export const QuantityButtonsContainer = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;

  button {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: rgba(211, 211, 211, 0.4);
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50px;
    cursor: pointer;

    &:hover {
      background-color: rgba(211, 211, 211, 0.642);
    }
  }
`;
