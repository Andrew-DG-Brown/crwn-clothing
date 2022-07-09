import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-bottom: 25px;
  }
`;

export const SeeAll = styled(Link)`
  text-decoration: underline;
  font-weight: 200;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    opacity: 50%;
  }
`;

export const Title = styled(Link)`
  font-size: 34px;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    opacity: 50%;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

// .category-preview-container {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 70px;

//   .header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;

//     h2 {
//       margin-bottom: 25px;
//     }

//     .see-all {
//       text-decoration: underline;
//       font-weight: 200;
//       font-size: 20px;
//       cursor: pointer;

//       &:hover {
//         opacity: 50%;
//       }
//     }

//     .title {
//       font-size: 34px;
//       cursor: pointer;

//       &:hover {
//         opacity: 50%;
//       }
//     }
//   }

//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//   }
// }
