import { CREATE_QUESTION, IcreateQuestion } from "./types";

export type createQuestionAction = IcreateQuestion;

export const createQuestion = (): IcreateQuestion => {
  return {
    type: CREATE_QUESTION
  };
};
