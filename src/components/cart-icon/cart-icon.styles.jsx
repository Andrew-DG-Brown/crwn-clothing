import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: ${(props) => (props.isCartOpen ? "-1" : "")};
`;

export const ItemCount = styled.span`
  width: 15px;
  height: 15px;
  margin-top: 9px;
  margin-right: 5px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  background-color: #e11d48;
  color: white;
  padding: auto;
  text-align: center;
  border-radius: 10px;
  animation: pop-in 0.2s ease-in-out;

  @keyframes pop-in {
    from {
      scale: 0%;
    }
    to {
      scale: 100%;
    }
  }
`;
