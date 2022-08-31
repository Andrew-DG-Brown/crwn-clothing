import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.543);
  z-index: ${(props) => (props.isSearchOpen || props.isCartOpen ? "-1" : "")};
  opacity: ${({ justRemoved }) => (justRemoved ? "0.4" : "1")};

  img {
    width: 100px;
    z-index: -1;
  }

  div {
    display: flex;
    span {
      margin-right: 10px;
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 30px;
  }
`;

export const LeftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  width: 100%;
  height: 100%;

  h2 {
    margin: 0px;
  }
`;

export const Price = styled.span`
  text-align: start;
  height: 90%;
  width: 100px;
`;
