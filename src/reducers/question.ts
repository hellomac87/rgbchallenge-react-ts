// constans
import * as constants from "../constants";

const randomMath = (): number => {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
};

// initialState & initialStateType
type initialStateType = number[];
const initialState: initialStateType = [
  randomMath(),
  randomMath(),
  randomMath()
];

// actionType
type actionType = { type: string };

// reducer
const questionReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case constants.CREATE_QUESTION:
      return [randomMath(), randomMath(), randomMath()];
    default:
      return state;
  }
};

// export reducer
export default questionReducer;
