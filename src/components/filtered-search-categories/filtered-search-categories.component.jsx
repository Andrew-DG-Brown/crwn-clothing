import { Fragment } from "react";
import { CategoryLink } from "../search-dropdown/search-dropdown.styles";

export const FilteredSearchCategories = ({
  filteredCategories,
  closeSearch,
}) => {
  return (
    <Fragment>
      {filteredCategories.map((title) => {
        const route = `shop/${title.toLowerCase()}`;
        return (
          <CategoryLink key={title} to={route} onClick={closeSearch}>
            {title}
          </CategoryLink>
        );
      })}
    </Fragment>
  );
};
