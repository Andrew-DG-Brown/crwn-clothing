import { compose, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

//middleware to log what the reducer is doing (logger)
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);