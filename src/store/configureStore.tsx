import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import logger from "redux-logger";
import RootReducer from "../reducers";

const configureStore = () => {
  const middlewares: any[] = [];

  // logger, works only in development environments
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );
  const store = createStore(RootReducer, enhancer);

  return store;
};

export default configureStore;
