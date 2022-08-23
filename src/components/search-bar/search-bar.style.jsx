import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 230px;
  height: 40px;
  background-color: #f1f5f9;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #e2e8f0;
  }
`;

export const SearchInput = styled.input`
  border: none;
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

export const SearchIcon = styled.img`
  width: 10px;
`;
