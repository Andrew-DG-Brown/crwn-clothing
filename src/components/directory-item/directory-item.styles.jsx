import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin: 0 7.5px 15px;
  overflow: hidden;
  z-index: ${(props) => (props.isSearchOpen || props.isCartOpen ? "-1" : "")};

  &:hover {
    cursor: pointer;

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;

  h2 {
    font-weight: bold;
    font-size: 37px;
    margin: 0px 0px 0px 0px;
    color: white;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    color: white;
    opacity: 0;
    margin: 0px;
  }

  &:hover {
    p {
      transition: all 0.25s ease-in-out;
      opacity: 1;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 20px 40px;
`;
