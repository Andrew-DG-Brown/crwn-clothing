import { createContext, useState } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  currentProducts: [],
  setCurrentProducts: () => this.currentProducts,
});

export const ProductsProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState([]);

  const value = { currentProducts, setCurrentProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
