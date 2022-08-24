import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
} from "./search-bar.style";

import { SearchDropdown } from "../search-dropdown/search-dropdown.component";

import { useClickOutside } from "../../utils/hooks/useClickOutside";

import { useState } from "react";

export const SearchBar = () => {
  const [inputClicked, setInputClicked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputClickedTrue = () => {
    setInputClicked(true);
  };

  const closeSearch = () => {
    setInputClicked(false);
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
      clicked={inputClicked}
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
