import { createContext, useState } from "react";

import PRODUCTS from "../../src/shop-data.json";

export const ProductsContext = createContext({
  currentProducts: [],
  setCurrentProducts: () => this.currentProducts,
});

export const ProductsProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState(PRODUCTS);
  const value = { currentProducts, setCurrentProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
