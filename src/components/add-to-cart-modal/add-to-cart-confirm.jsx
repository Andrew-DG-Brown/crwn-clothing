import { ModalHeader, BoldProduct } from "./add-to-cart-confirm.styles";

const AddToCartConfirm = ({ productName }) => {
  return (
    <ModalHeader>
      You added <BoldProduct>{productName}</BoldProduct> to your cart
    </ModalHeader>
  );
};

export default AddToCartConfirm;
