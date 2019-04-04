import {
  QuestionState,
  CREATE_QUESTION,
  SEND_USER_ANSWER,
  ADD_SCORE,
  RESET_GAME,
  QuestionActionTypes
} from "./types";

import { answer, problems } from "./actions";

// initialState
const initialState: QuestionState = {
  answer: answer(),
  problems: problems(),
  activeItem: null,
  userAnswer: null,
  score: 0
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
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + 100
      };

    case RESET_GAME:
      return {
        ...state,
        answer: answer(),
        problems: problems(),
        activeItem: null,
        userAnswer: null,
        score: 0
      };
    default:
      return state;
  }
};
