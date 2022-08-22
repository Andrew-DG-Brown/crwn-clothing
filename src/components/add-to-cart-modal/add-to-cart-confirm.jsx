import { ModalHeader, BoldProduct } from "./add-to-cart-confirm.styles";

const AddToCartConfirm = ({ productName }) => {
  return (
    <ModalHeader>
      <p>
        You added <BoldProduct>{productName}</BoldProduct> to your cart
      </p>
    </ModalHeader>
  );
};

export default AddToCartConfirm;
