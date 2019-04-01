import { combineReducers } from "redux";
import { StoreState } from "../types/index";

import questionReducer from "./question";

const RootReducer = combineReducers<StoreState>({
  question: questionReducer
});

export default RootReducer;
