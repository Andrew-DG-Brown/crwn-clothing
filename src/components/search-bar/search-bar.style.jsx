import styled from "styled-components";
import { ReactComponent as SearchLogo } from "../../assets/search-outline.svg";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.clicked ? "85%" : "200px")};
  height: 40px;
  background-color: #f1f5f9;
  border-radius: 50px;
  padding: 8px;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: white;
    box-shadow: 0 0 0 2px #737373;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  padding: 5px;
  background: none;
  font-size: 15px;
  &::placeholder {
    color: #94a3b8;
  }
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(SearchLogo)`
  width: 20px;
`;

export const CloseButton = styled.div`
  display: flex;
  padding-bottom: 1px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  &:hover {
    background-color: black;
    color: white;
  }
`;
