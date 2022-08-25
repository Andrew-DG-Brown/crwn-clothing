import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin: 15px auto 0 auto;
  }
`;

export const EmptyMessage = styled.span`
  width: 100%;
  margin: auto 0;
  text-align: center;
  font-size: large;
`;

export const CartItems = styled.div`
  min-height: 230px;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    width: auto;
    margin-right: 10px;
  }
`;
