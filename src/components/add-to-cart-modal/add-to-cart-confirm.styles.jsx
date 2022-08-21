import styled from "styled-components";

export const ModalHeader = styled.span`
  position: fixed;
  width: fit-content;
  padding: 0.5rem 0.8rem;
  border-radius: 7px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #059669;
  color: white;
  z-index: 1;
  animation: slide-in 2.5s ease-in-out;

  @keyframes slide-in {
    0% {
      transform: translateY(-45px);
    }
    10% {
      transform: translateY(5px);
    }
    90% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-45px);
    }
  }
`;

export const BoldProduct = styled.span`
  font-weight: bold;
`;
