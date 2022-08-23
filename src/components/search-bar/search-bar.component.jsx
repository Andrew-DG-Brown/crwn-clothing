import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
  CloseButton,
} from "./search-bar.style";

import { SearchDropdown } from "../search-dropdown/search-dropdown.component";

import { useState, useRef, Fragment } from "react";

export const SearchBar = () => {
  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const focusRef = useRef(null);

  const inputClickedTrue = () => {
    focusRef.current.focus();
    setInputClicked(true);
  };

  const onChangeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Fragment>
      <SearchBarContainer onClick={inputClickedTrue} clicked={inputClicked}>
        <SearchIcon />
        <SearchInput
          onChange={onChangeInputHandler}
          value={inputValue}
          ref={focusRef}
          type="text"
          placeholder="Search"
        />
        {inputClicked && <CloseButton>&#10005;</CloseButton>}
      </SearchBarContainer>
      <SearchDropdown searchInput={inputValue} />
    </Fragment>
  );
};
