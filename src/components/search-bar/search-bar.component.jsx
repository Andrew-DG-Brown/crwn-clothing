import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
} from "./search-bar.style";
import { ReactComponent as SearchLogo } from "../../assets/search-outline.svg";

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchLogo />
      <SearchInput type="text" placeholder="Search" />
    </SearchBarContainer>
  );
};
