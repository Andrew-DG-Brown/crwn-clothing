import { ModalHeader, BoldProduct } from "./AddToCartConfirm.styles";

const AddToCartConfirm = ({ productName }) => {
  return (
    <ModalHeader>
      You added <BoldProduct>{productName}</BoldProduct> to your cart
    </ModalHeader>
  );
};

export default AddToCartConfirm;
