import { compose, createStore, applyMiddleware } from "redux";

// import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

//middleware to log what the reducer is doing (logger)
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

//out Store is being exported and passed to the provider to wrap the whole App
export const store = createStore(rootReducer, undefined, composedEnhancers);
