import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const AuthFormsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 30px auto;
  z-index: ${(props) => (props.isSearchOpen ? "-1" : "")};
`;
