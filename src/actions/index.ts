import * as constants from "../constants";

export interface IcreateQuestion {
  type: constants.CREATE_QUESTION;
}

export type createQuestionAction = IcreateQuestion;

export const createQuestion = (): IcreateQuestion => {
  return {
    type: constants.CREATE_QUESTION
  };
};
