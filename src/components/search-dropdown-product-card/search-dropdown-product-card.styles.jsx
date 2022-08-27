import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 350px;
  margin: 30px 0;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-bottom: 14px;
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
  width: 100%;
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

export const ContentContainer = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  width: fit-content;
  margin-bottom: 3px;
  font-size: 20px;
  font-weight: bold;
`;

export const Price = styled.span`
  margin-bottom: 15px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
