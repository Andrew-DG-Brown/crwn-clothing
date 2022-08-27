import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Img = styled.img`
  z-index: -1;
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const ProductButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const Footer = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
  text-align: right;
`;

export const QuantityInCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: ${(props) => (props.hovering ? "fit-content" : "")};
  height: 40px;
  padding: 0px 0.8rem;
  border-radius: 0 0 0 7px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  top: -10px;
  right: 0px;
  text-align: center;
  background-color: ${(props) => (props.hovering ? "black" : "#059669")};
  color: white;
  z-index: 1;
  transition: width 1s;
  animation: pop-in 0.2s ease-in-out;
  span {
    font-weight: bold;
    margin-right: 5px;
  }

  @keyframes pop-in {
    from {
      scale: 0%;
    }
    to {
      scale: 100%;
    }
  }
`;

export const RemoveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    margin-right: 20px;
  }
`;
