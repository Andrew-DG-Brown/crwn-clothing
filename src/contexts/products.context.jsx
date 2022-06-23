import { createContext, useState, useEffect } from "react";

import { getCatagoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
  currentProducts: [],
  setCurrentProducts: () => this.currentProducts,
});

export const ProductsProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    const getCatagoriesMap = async () => {
      const catagoryMap = await getCatagoriesAndDocuments();
      console.log(catagoryMap);
    };
    getCatagoriesMap();
  }, []);

  const value = { currentProducts, setCurrentProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
