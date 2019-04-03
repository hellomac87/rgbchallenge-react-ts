// redux thunk dependencies
// import { AppState } from "../index";
// import { ThunkAction, ThunkDispatch } from "redux-thunk";
// import { AnyAction } from "redux";

import {
  CREATE_QUESTION,
  SEND_USER_ANSWER,
  REQUEST_ANSWER,
  QuestionActionTypes
} from "./types";

export const randomMath = (): number => {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
};

export const answer = (): number => {
  return Math.floor(Math.random() * 3);
};

export const createRGB = (): string => {
  return `rgb(${randomMath()},${randomMath()},${randomMath()})`;
};

export const problems = (): string[] => {
  return [createRGB(), createRGB(), createRGB()];
};

// action creator
export const createQuestion = (): QuestionActionTypes => {
  return {
    type: CREATE_QUESTION,
    answer: answer(),
    problems: problems()
  };
};

export const sendUserAnswer = (userAnswer: number): QuestionActionTypes => {
  return {
    type: SEND_USER_ANSWER,
    userAnswer
  };
};

export const requestAnswer = (userAnswer: number) => (
  dispatch: any,
  getState: any
): any => {
  if (getState().question.answer === userAnswer) {
    console.log("정답");
  } else {
    dispatch(createQuestion());
  }

  return {
    type: REQUEST_ANSWER
  };
};
