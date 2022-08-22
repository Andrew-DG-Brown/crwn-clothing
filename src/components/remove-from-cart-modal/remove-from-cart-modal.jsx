import { ModalHeader, BoldProduct } from "./remove-from-cart-modal.styles";

const RemoveFromCartConfirm = ({ productName }) => {
  console.log("remove modal");
  return (
    <ModalHeader>
      <p>
        You removed <BoldProduct>{productName}</BoldProduct> from your cart
      </p>
    </ModalHeader>
  );
};

export default RemoveFromCartConfirm;
