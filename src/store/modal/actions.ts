import { TOGGLE_MODAL, ModalActionsTypes } from "./types";

export const toggleModal = (flag: boolean): ModalActionsTypes => {
  return {
    type: TOGGLE_MODAL,
    payload: flag
  };
};
