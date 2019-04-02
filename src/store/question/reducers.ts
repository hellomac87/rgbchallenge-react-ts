import { QuestionState, CREATE_QUESTION, QuestionActionTypes } from "./types";

// initialState
const initialState: QuestionState = {
  answer: 0,
  problems: [1, 1, 1]
  // activeItem: null
};

// reducer
export const questionReducer = (
  state = initialState,
  action: QuestionActionTypes
) => {
  switch (action.type) {
    case CREATE_QUESTION:
      return {
        answer: action.answer,
        problems: action.problems
      };
    default:
      return state;
  }
};
