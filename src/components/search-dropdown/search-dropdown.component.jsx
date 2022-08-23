import { DropdownContainer } from "./search-dropdown.styles";

import { SearchProductCard } from "../search-dropdown-product-card/search-dropdown-product-card.component";

import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/categories.selector";
import { useState } from "react";
import { useEffect } from "react";

export const SearchDropdown = ({ searchInput }) => {
  const products = useSelector(selectCategories).reduce((accum, category) => {
    return (accum = [...accum, ...category.items]);
  }, []);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return setFilteredProducts(filteredProducts);
  }, [searchInput]);

  console.log(filteredProducts);

  return (
    <DropdownContainer>
      {searchInput &&
        filteredProducts.map((product) => {
          return <SearchProductCard product={product} key={product.id} />;
        })}
    </DropdownContainer>
  );
};
