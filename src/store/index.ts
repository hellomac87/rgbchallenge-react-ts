import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import logger from "redux-logger";

// reducers
import { questionReducer } from "./question/reducers";
import { QuestionState } from "./question/types";

// AppState interface
export interface AppState {
  question: QuestionState;
}

// make rootReducer
const rootReducer = combineReducers<AppState>({
  question: questionReducer
});

// configureStore
const configureStore = () => {
  const middlewares: any[] = [];

  // logger, works only in development environments
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  // redux devtool
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
    // other store enhancers if any
  );

  const store = createStore(rootReducer, enhancer);

  return store;
};

export default configureStore;
