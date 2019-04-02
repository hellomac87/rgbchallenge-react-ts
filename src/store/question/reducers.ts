import { QuestionState, CREATE_QUESTION } from "./types";

const randomMath = (): number => {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
};

// initialState
const initialState: QuestionState = [randomMath(), randomMath(), randomMath()];

// actionType
type actionType = { type: string };

// reducer
const questionReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case CREATE_QUESTION:
      return [randomMath(), randomMath(), randomMath()];
    default:
      return state;
  }
};

// export reducer
export default questionReducer;
