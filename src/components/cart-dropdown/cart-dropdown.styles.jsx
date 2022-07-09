import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 390px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin: 15px auto 0 auto;
  }
`;

export const EmptyMessage = styled.span`
  width: 100%;
  margin: auto 0;
  text-align: center;
  font-size: large;
`;

export const CartItems = styled.div`
  height: 290px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  h2 {
    width: auto;
    margin-right: 10px;
  }
`;

// .cart-dropdown-container {
//   position: absolute;
//   width: 500px;
//   height: 390px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 90px;
//   right: 40px;
//   z-index: 5;

//   .empty-cart {
//     width: 100%;
//     margin: auto 0;
//     text-align: center;
//     font-size: large;
//   }

//   .cart-items {
//     height: 290px;
//     display: flex;
//     flex-direction: column;
//     overflow-y: scroll;
//   }

//   button {
//     margin: 15px auto 0 auto;
//   }

//   .footer-container {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-end;

//     h2 {
//       width: auto;
//       margin-right: 10px;
//     }
//   }
// }
