import styled from "styled-components";
import { ReactComponent as SearchLogo } from "../../assets/search-outline.svg";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.clicked ? "85%" : "200px")};
  height: 40px;
  background-color: #f4f4f5;
  border-radius: 50px;
  padding: 8px;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #e4e4e7;
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
  cursor: pointer;
`;
