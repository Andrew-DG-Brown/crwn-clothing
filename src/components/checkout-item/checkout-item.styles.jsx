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

  img {
    width: 100px;
    z-index: -1;
  }

  h2 {
    width: 80px;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 30px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  text-align: center;
`;
