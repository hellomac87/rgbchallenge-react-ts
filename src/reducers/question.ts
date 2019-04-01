// constans
import * as constants from "../constants";

// initialState & initialStateType
type initialStateType = number[];
const initialState: initialStateType = [211, 211, 211];

// actionType
type actionType = { type: string };

// reducer
const questionReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case constants.CREATE_QUESTION:
      return [1, 1, 1];
    default:
      return state;
  }
};

// export reducer
export default questionReducer;
