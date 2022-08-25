import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  box-shadow: ${(props) =>
    props.isSearchOpen || props.isCartOpen
      ? "0 0 200px 5000px rgba(0, 0, 0, 0.5)"
      : ""};
  border-radius: ${(props) => (props.isCartOpen ? "20px 20px 0 20px" : "20px")};
  transition: box-shadow 0.15s;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
`;

export const NavLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
