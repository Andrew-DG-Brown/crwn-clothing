import { Fragment } from "react";
import { SearchProductCard } from "../search-dropdown-product-card/search-dropdown-product-card.component";

export const FilteredSearchProducts = ({ filteredProducts }) => {
  return (
    <Fragment>
      {filteredProducts.map((product) => {
        return <SearchProductCard product={product} key={product.id} />;
      })}
    </Fragment>
  );
};
