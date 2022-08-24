import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 350px;
  align-items: center;
  margin: 30px 0;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 5px;
  animation: fade-in 0.1s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const ProductButton = styled(Button)`
  width: 250px;
  animation: fade-in 0.1s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  height: 50%;
  margin-left: 20px;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  animation: fade-in 0.1s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0%;
    }
    to {
      opacity: 100%;
    }
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  font-size: 25px;
  font-weight: bold;
`;

export const Price = styled.span`
  width: 10%;
  text-align: right;
`;
