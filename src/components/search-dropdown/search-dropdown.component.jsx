import {
  DropdownContainer,
  CategoryLinksContainer,
  CategoryLink,
} from "./search-dropdown.styles";

import { SearchProductCard } from "../search-dropdown-product-card/search-dropdown-product-card.component";

import { useSelector } from "react-redux";
import {
  selectAllProducts,
  selectCategoryTitles,
} from "../../store/categories/categories.selector";
import { useState, useEffect, Fragment } from "react";

export const SearchDropdown = ({ searchInput, isSearchOpen }) => {
  const allProducts = useSelector(selectAllProducts);
  const categoryTitles = useSelector(selectCategoryTitles);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const filteredProducts = allProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return setFilteredProducts(filteredProducts);
  }, [searchInput]);

  return (
    <Fragment>
      {!searchInput && isSearchOpen && (
        <DropdownContainer narrow>
          <h2>Shop by Categories</h2>
          <CategoryLinksContainer>
            {categoryTitles.map((title) => {
              const route = `shop/${title.toLowerCase()}`;
              return (
                <CategoryLink key={title} to={route}>
                  {title}
                </CategoryLink>
              );
            })}
          </CategoryLinksContainer>
        </DropdownContainer>
      )}
      <DropdownContainer>
        {isSearchOpen &&
          searchInput &&
          filteredProducts.map((product, index) => {
            if (index < 12) {
              return <SearchProductCard product={product} key={product.id} />;
            }
          })}
      </DropdownContainer>
    </Fragment>
  );
};
