import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getCatagoriesAndDocuments,
} from "./utils/firebase/firebase.utils.js";
import { setCurrentUser } from "./store/user/user.action.js";
import { setCategories } from "./store/categories/categories.action.js";
import { setIsCartOpen } from "./store/cart/cart.actions.js";

import Home from "./routes/home/home.component.jsx";
import Nav from "./routes/navigation/nav.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  //closes all dropdowns when route changes
  useEffect(() => {
    dispatch(setIsCartOpen(false));
  }, [location, dispatch]);

  //setting user state in store
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

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
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
