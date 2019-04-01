import * as constants from "../constants";

export interface CreateQuestion {
  type: constants.CREATE_QUESTION;
}

export const createQuestion = (): CreateQuestion => {
  console.log("createQuestion");
  return {
    type: constants.CREATE_QUESTION
  };
};
