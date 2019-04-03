import {
  QuestionState,
  CREATE_QUESTION,
  SEND_USER_ANSWER,
  QuestionActionTypes
} from "./types";
import { answer, problems } from "./actions";
// initialState
const initialState: QuestionState = {
  answer: answer(),
  problems: problems(),
  activeItem: null,
  userAnswer: null
};

// reducer
export const questionReducer = (
  state = initialState,
  action: QuestionActionTypes
) => {
  switch (action.type) {
    case CREATE_QUESTION:
      return {
        ...state,
        answer: action.answer,
        problems: action.problems
      };
    case SEND_USER_ANSWER:
      return {
        ...state,
        userAnswer: action.userAnswer
      };
    default:
      return state;
  }
};
