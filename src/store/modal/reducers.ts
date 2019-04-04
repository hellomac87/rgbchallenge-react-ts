import { TOGGLE_MODAL, ModalState, ModalActionsTypes } from "./types";

const initialState: ModalState = {
  show: false
};

export const modalReducer = (
  state = initialState,
  action: ModalActionsTypes
) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        show: action.payload
      };
    default:
      return state;
  }
};
