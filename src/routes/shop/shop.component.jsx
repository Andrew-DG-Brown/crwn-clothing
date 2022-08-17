import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import { useDispatch } from "react-redux/es/hooks/useDispatch";

import { setCategories } from "../../store/categories/categories.action";

import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Catagory from "../catagory/catagory.component";

import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  //setting state of categoriesMap in store

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCatagoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":catagory" element={<Catagory />} />
    </Routes>
  );
};

export default Shop;
