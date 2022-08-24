import { DropdownContainer } from "./search-dropdown.styles";

import { SearchProductCard } from "../search-dropdown-product-card/search-dropdown-product-card.component";

import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/categories/categories.selector";
import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

export const SearchDropdown = ({ searchInput, isSearchOpen }) => {
  const allProducts = useSelector(selectAllProducts);

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
        <DropdownContainer>
          <h2>Shop by Categories</h2>
          <div>
            <p>pants</p>
            <p>pants</p>
            <p>pants</p>
            <p>pants</p>
            <p>pants</p>
            <p>pants</p>
          </div>
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
