import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(128, 128, 128, 0.543);

  img {
    width: 100px;
  }

  h2 {
    width: 80px;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 30px;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  text-align: center;
`;

export const DeleteButton = styled.button`
  width: 45px;
  height: 45px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

// .checkout-item-container {
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 0;
//   border-bottom: 1px solid rgba(128, 128, 128, 0.543);

//   .delete-button {
//     width: 45px;
//     height: 45px;

//     &:hover {
//       background-color: black;
//       color: white;
//     }
//   }

//   .quantity-container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100px;
//     text-align: center;
//   }

//   img {
//     width: 100px;
//   }

//   h2 {
//     width: 80px;
//   }

//   button {
//     cursor: pointer;
//     border: none;
//     background: none;
//     font-size: 30px;
//   }

// }
