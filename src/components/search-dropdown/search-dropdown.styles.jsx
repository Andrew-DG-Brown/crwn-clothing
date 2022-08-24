import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  padding: 0 20px;
  width: 700px;
  background-color: white;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.3);
  border-top: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  top: 90px;
  right: 0;
  left: 0;
  margin: 0 auto;
  z-index: 4;
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
