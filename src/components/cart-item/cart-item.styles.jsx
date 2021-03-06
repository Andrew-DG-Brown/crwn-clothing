import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 70px;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = styled.span`
  width: 70px;
`;

export const QuantityButtonsContainer = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: rgba(211, 211, 211, 0.184);
    width: 30px;
    height: 30px;
    border-radius: 50px;

    &:hover {
      background-color: rgba(211, 211, 211, 0.442);
    }
  }
`;

// .cart-item-container {
//   width: 100%;
//   display: flex;
//   height: 80px;
//   margin-bottom: 15px;

//   img {
//     width: 70px;
//   }

//   .item-details {
//     width: 70%;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     padding: 10px 20px;

//     .name {
//       font-size: 16px;
//     }
//   }

//   .quantity-buttons-container {
//     display: flex;
//     width: 130px;
//     justify-content: space-between;
//     align-items: center;
//     margin-right: 20px;

//     button {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       padding: 5px;
//       background-color: rgba(211, 211, 211, 0.184);
//       width: 30px;
//       height: 30px;
//       border-radius: 50px;

//       &:hover {
//         background-color: rgba(211, 211, 211, 0.442);
//       }
//     }
//   }
// }
