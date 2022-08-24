import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
} from "./search-bar.style";

import { SearchDropdown } from "../search-dropdown/search-dropdown.component";

import { useClickOutside } from "../../utils/hooks/useClickOutside";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { selectIsSearchOpen } from "../../store/search/search.selector";
import { setIsSearchOpen } from "../../store/search/search.actions";

import { useState } from "react";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector(selectIsSearchOpen);

  // const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputClickedTrue = () => {
    dispatch(setIsSearchOpen(true));
  };

  const closeSearch = () => {
    dispatch(setIsSearchOpen(false));
    setInputValue("");
  };

  const nodeRef = useClickOutside(() => closeSearch());

  const onChangeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <SearchBarContainer
      ref={nodeRef}
      onClick={inputClickedTrue}
      clicked={isSearchOpen}
    >
      <SearchIcon />
      <SearchInput
        onChange={onChangeInputHandler}
        value={inputValue}
        type="text"
        placeholder="Search"
      />
      <SearchDropdown searchInput={inputValue} />
    </SearchBarContainer>
  );
};
