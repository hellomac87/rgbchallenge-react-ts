import * as constants from "../constants";

type QuestionActionType = {
  type: string;
};

type QuestionInitialStateType = number[];

const initialState: QuestionInitialStateType = [211, 211, 211];

const questionReducer = (state = initialState, action: QuestionActionType) => {
  switch (action.type) {
    case constants.CREATE_QUESTION:
      return [1, 1, 1];
    default:
      return state;
  }
};

export default questionReducer;
