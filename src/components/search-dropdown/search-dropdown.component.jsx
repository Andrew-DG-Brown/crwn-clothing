import {
  DropdownContainer,
  CategoryLinksContainer,
  CategoryLink,
  DropdownProductsContainer,
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
  const [filteredCategories, setFilteredCategories] = useState(categoryTitles);

  //set filtered products
  useEffect(() => {
    const filteredProducts = allProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return setFilteredProducts(filteredProducts);
  }, [searchInput]);

  //set filtered categories
  useEffect(() => {
    const filteredCategories = categoryTitles.filter((title) => {
      return title.toLowerCase().includes(searchInput.toLowerCase());
    });
    return setFilteredCategories(filteredCategories);
  }, [searchInput]);

  return (
    <Fragment>
      {/* === Default  "Shop by categories" dropdown === */}
      {!searchInput && isSearchOpen && (
        <DropdownContainer narrow>
          <h2>Shop by categories</h2>
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
      {/* === Active search dropdown === */}
      <DropdownContainer active>
        {/* === Active Categories List === */}
        {isSearchOpen && searchInput && (
          <CategoryLinksContainer active>
            <Fragment>
              <h2>Categories for {`"${searchInput}"`}</h2>
              {filteredCategories[0] ? (
                filteredCategories.map((title) => {
                  const route = `shop/${title.toLowerCase()}`;
                  return (
                    <CategoryLink key={title} to={route}>
                      {title}
                    </CategoryLink>
                  );
                })
              ) : (
                <span>No categories found</span>
              )}
            </Fragment>
          </CategoryLinksContainer>
        )}
        {/* === Active Product Grid === */}
        {isSearchOpen && searchInput && (
          <DropdownProductsContainer>
            {isSearchOpen &&
              searchInput &&
              filteredProducts.map((product, index) => {
                if (index < 12) {
                  return (
                    <SearchProductCard product={product} key={product.id} />
                  );
                }
              })}
          </DropdownProductsContainer>
        )}
      </DropdownContainer>
    </Fragment>
  );
};
