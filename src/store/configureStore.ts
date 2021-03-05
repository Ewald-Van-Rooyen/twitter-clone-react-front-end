import { applyMiddleware, createStore } from "redux"
import thunkMiddleware from "redux-thunk"

import loggerMiddleware from "../middleware/logger";
import rootReducer from "../reducers";

export default function configureStore() {
  const middleware = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const store = createStore(rootReducer, middlewareEnhancer);

  return store;
}
