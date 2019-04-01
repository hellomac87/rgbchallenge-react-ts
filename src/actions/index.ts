import * as constants from "../constants";

export interface IcreateQuestion {
  type: constants.CREATE_QUESTION;
}

export const createQuestion = (): IcreateQuestion => {
  console.log("createQuestion");
  return {
    type: constants.CREATE_QUESTION
  };
};
