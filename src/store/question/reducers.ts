import { QuestionState, CREATE_QUESTION, QuestionActionTypes } from "./types";
import { answer, problems } from "./actions";
// initialState
const initialState: QuestionState = {
  answer: answer(),
  problems: problems()
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
