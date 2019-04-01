import { combineReducers } from "redux";
import { StoreState } from "../types/index";

import questionReducer from "./question_reducer";

const RootReducer = combineReducers<StoreState>({
  question: questionReducer
});

export default RootReducer;
