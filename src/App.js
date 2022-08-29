import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils.js";
import { setCurrentUser } from "./store/user/user.action.js";
import { fetchCategoriesAsync } from "./store/categories/categories.action.js";

import { useCloseDropdowns } from "./utils/hooks/useCloseDropdowns.js";

import Home from "./routes/home/home.component.jsx";
import Nav from "./routes/navigation/nav.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const currentPath = location.pathname;

  //closes all dropdowns when route changes
  useCloseDropdowns(currentPath);

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
    dispatch(fetchCategoriesAsync());
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
