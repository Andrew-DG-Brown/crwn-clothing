import { setIsCartOpen } from "../../store/cart/cart.actions.js";
import { setIsSearchOpen } from "../../store/search/search.actions.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { selectIsSearchOpen } from "../../store/search/search.selector.js";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

export const useCloseDropdowns = (dependent) => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const isSearchOpen = useSelector(selectIsSearchOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isCartOpen) {
      dispatch(setIsCartOpen(false));
    } else if (isSearchOpen) {
      dispatch(setIsSearchOpen(false));
    }
    return;
  }, [dependent]);
};
