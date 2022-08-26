import styled from "styled-components";

export const CheckoutListContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyCart = styled.span`
  width: 100%;
  margin: 50px 0;
  text-align: center;
  font-size: 30px;
`;

export const CartTotalPriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 25px;
`;

export const CartTotalPrice = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin-left: 15px;
`;
