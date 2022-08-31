import { ModalHeader, BoldProduct } from "./dropdown-modal.styles";

export const DropdownModal = ({ type, productName }) => {
  return (
    <ModalHeader type={type}>
      {type === "added-to-cart" && (
        <p>
          You added <BoldProduct>{productName}</BoldProduct> to your cart
        </p>
      )}
      {type === "user-sign-out" && <p>You are now signed-out</p>}
      {type === "user-sign-in" && <p>Signed-in successfully</p>}
    </ModalHeader>
  );
};
