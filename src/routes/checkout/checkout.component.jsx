import CheckoutItemList from "../../components/checkout-list/checkout-list.component";

//Styled Components
import {
  CheckoutPageContainer,
  CheckoutSummary,
  SummaryTextContainer,
  TextAndCostContainer,
} from "./checkout.styles";

//Redux
import {
  selectCartTotal,
  selectCartTotalTax,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartTotalPrice = useSelector(selectCartTotal);
  const cartTax = useSelector(selectCartTotalTax);
  const deliveryCost = 30;
  console.log(cartTotalPrice, cartTax, deliveryCost);

  return (
    <CheckoutPageContainer>
      <CheckoutItemList />
      <CheckoutSummary>
        <h2>Summary</h2>
        <SummaryTextContainer>
          <TextAndCostContainer>
            <span>Subtotal</span>
            <span>${cartTotalPrice}</span>
          </TextAndCostContainer>
          <TextAndCostContainer>
            <span>Delivery and Handling</span>
            <span>{cartTotalPrice > 0 ? `$${deliveryCost}.00` : "$0.00"}</span>
          </TextAndCostContainer>
          <TextAndCostContainer>
            <span>Taxes</span>
            <span>${cartTax}</span>
          </TextAndCostContainer>
          <TextAndCostContainer total bolded>
            <span>Total</span>
            <span>
              {cartTotalPrice > 0
                ? `$${cartTotalPrice + cartTax + deliveryCost}`
                : "$0.00"}
            </span>
          </TextAndCostContainer>
        </SummaryTextContainer>
      </CheckoutSummary>
    </CheckoutPageContainer>
  );
};

export default Checkout;
