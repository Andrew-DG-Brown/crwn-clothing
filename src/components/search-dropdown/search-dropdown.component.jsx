import {
  DropdownContainer,
  CategoryLinksContainer,
  CategoryLink,
  DropdownProductsContainer,
} from "./search-dropdown.styles";

import { SearchProductCard } from "../search-dropdown-product-card/search-dropdown-product-card.component";
import { ShopByCategoriesLink } from "../shop-by-categories-link/shop-by-categories-link.component";
import { FilteredSearchCategories } from "../filtered-search-categories/filtered-search-categories.component";
import { FilteredSearchProducts } from "../filtered-search-products/filtered-search-products.components";

import { useSelector, useDispatch } from "react-redux";
import { setIsSearchOpen } from "../../store/search/search.actions";
import {
  selectAllProducts,
  selectCategoryTitles,
} from "../../store/categories/categories.selector";
import { useState, useEffect, Fragment } from "react";

export const SearchDropdown = ({ searchInput, isSearchOpen }) => {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectAllProducts);
  const categoryTitles = useSelector(selectCategoryTitles);

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [filteredCategories, setFilteredCategories] = useState(categoryTitles);

  const closeSearch = () => {
    dispatch(setIsSearchOpen(false));
  };

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
            <ShopByCategoriesLink categoryTitles={categoryTitles} closeSearch={closeSearch}/>
          </CategoryLinksContainer>
        </DropdownContainer>
      )}
      {/* === Active search dropdown === */}
      <DropdownContainer active>
        {/* === Active Categories List === */}
        {isSearchOpen && searchInput && (
          <CategoryLinksContainer active>
              <h2>Categories and products for {`"${searchInput}"`}</h2>
              {filteredCategories[0] ? (
                <FilteredSearchCategories filteredCategories={filteredCategories} closeSearch={closeSearch}/>
              ) : (
                <span>
                  {!filteredCategories[0] && !filteredProducts[0]
                    ? "No results found"
                    : "No categories found"}
                </span>
              )}
          </CategoryLinksContainer>
        )}
        {/* === Active Product Grid === */}
        {isSearchOpen && searchInput && (
          <DropdownProductsContainer>
            {isSearchOpen &&
              searchInput &&
              <FilteredSearchProducts filteredProducts={filteredProducts}/>}
          </DropdownProductsContainer>
        )}
      </DropdownContainer>
    </Fragment>
  );
};
