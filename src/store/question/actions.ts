import { CREATE_QUESTION, IcreateQuestion } from "./types";

// type export for container
export type createQuestionAction = IcreateQuestion;

// action creator
export const createQuestion = (): IcreateQuestion => {
  return {
    type: CREATE_QUESTION
  };
};
