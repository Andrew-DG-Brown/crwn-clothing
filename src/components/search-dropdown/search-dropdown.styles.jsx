import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownContainer = styled.div`
  position: absolute;
  padding: 0 20px;
  width: ${(props) => (props.narrow ? "800px" : "1400px")};
  background-color: white;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.3);
  border-top: none;
  display: flex;
  flex-direction: ${(props) => (props.active ? "row" : "column")};
  justify-content: space-between;
  align-items: center;
  top: 90px;
  right: 0;
  left: 0;
  margin: 0 auto;
  z-index: 4;
  border-radius: 0 0 20px 20px;
  transition: height 0.5s;
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

export const CategoryLinksContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CategoryLink = styled(Link)`
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    background-color: #f4f4f5;
    border-radius: 10px;
  }
`;

export const DropdownProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 60px;
  row-gap: 60px;
  padding: 50px 20px 50px 0;
`;
