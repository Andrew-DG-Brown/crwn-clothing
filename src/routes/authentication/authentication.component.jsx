import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthContainer, AuthFormsContainer } from "./authentication.styles";

import { useSelector } from "react-redux/es/exports";
import { selectIsSearchOpen } from "../../store/search/search.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
const Authentication = () => {
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
    <AuthContainer>
      <h1>Sign In Page</h1>
      <AuthFormsContainer isSearchOpen={isSearchOpen} isCartOpen={isCartOpen}>
        <SignInForm />
        <SignUpForm />
      </AuthFormsContainer>
    </AuthContainer>
  );
};

export default Authentication;
