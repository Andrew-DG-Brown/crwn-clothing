import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
} from "./search-bar.style";

import { Fragment, useRef } from "react";

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

  const [inputValue, setInputValue] = useState("");

  const closeSearch = () => {
    dispatch(setIsSearchOpen(false));
  };
  const containerNodeRef = useClickOutside(() => closeSearch());
  const inputRef = useRef();

  const inputClicked = () => {
    inputRef.current.focus();
    if (!isSearchOpen) {
      dispatch(setIsSearchOpen(true));
    }
  };

  const onChangeInputHandler = (e) => {
    if (!isSearchOpen) {
      dispatch(setIsSearchOpen(true));
    }
    setInputValue(e.target.value);
  };

  return (
    <Fragment>
      <SearchBarContainer
        ref={containerNodeRef}
        onClick={inputClicked}
        clicked={isSearchOpen}
      >
        <SearchIcon />
        <SearchInput
          ref={inputRef}
          onChange={onChangeInputHandler}
          value={inputValue}
          type="text"
          placeholder="Search"
        />
        <SearchDropdown searchInput={inputValue} isSearchOpen={isSearchOpen} />
      </SearchBarContainer>
    </Fragment>
  );
};
