// declare reducer state type
export interface ModalState {
  show: boolean;
}

// constants for action & reducers
export const TOGGLE_MODAL = "TOGGLE_MODAL";

interface ToggleModalAction {
  type: typeof TOGGLE_MODAL;
  payload: boolean;
}

export type ModalActionsTypes = ToggleModalAction;
