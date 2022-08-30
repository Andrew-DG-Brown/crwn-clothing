import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useClickOutside } from "../../utils/hooks/useClickOutside";

//Redux
import { useSelector, useDispatch } from "react-redux/es/exports";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectIsSearchOpen } from "../../store/search/search.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";

//Firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";

//Components
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { SearchBar } from "../../components/search-bar/search-bar.component";
import { DropdownModal } from "../../components/dropdown-modal/dropdown-modal";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./nav.styles";

const Nav = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const isSearchOpen = useSelector(selectIsSearchOpen);

  const [signedOutClicked, setSignOutClicked] = useState(false);
  const [justSignedIn, setJustSignedIn] = useState(false);

  const cartContainerNodeRef = useClickOutside(() => closeCart());

  //fires modal only when user signs in
  useEffect(() => {
    if (currentUser) {
      setJustSignedIn(true);
      setTimeout(() => {
        setJustSignedIn(false);
      }, 2400);
    }
  }, [currentUser]);

  const closeCart = () => {
    dispatch(setIsCartOpen(false));
  };

  const handleSignOut = () => {
    signOutUser();
    setSignOutClicked(true);
    setTimeout(() => {
      setSignOutClicked(false);
    }, 2400);
  };

  return (
    <Fragment>
      {signedOutClicked && <DropdownModal type="user-sign-out" />}
      {justSignedIn && <DropdownModal type="user-sign-in" />}
      <NavigationContainer isSearchOpen={isSearchOpen} isCartOpen={isCartOpen}>
        <LogoContainer to="/">
          <CrwnLogo id="logo" />
        </LogoContainer>

        <NavLinksContainer>
          <SearchBar />
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/authentication">Sign In</NavLink>
          )}
          <div id="cart-container" ref={cartContainerNodeRef}>
            <CartIcon />
            {isCartOpen && <CartDropdown />}
          </div>
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
