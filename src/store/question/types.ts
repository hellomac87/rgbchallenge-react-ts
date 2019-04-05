// declare reducer state type
export interface QuestionState {
  answer: number;
  problems: string[];
  activeItem: number | null;
  userAnswer: number | null;
  score: number;
}

// constants for actions & reducers
// thunkActions
export const SEND_USER_ANSWER = "SEND_USER_ANSWER";
export const RESET_GAME = "RESET_GAME";

export const CREATE_QUESTION = "CREATE_QUESTION";
export const REQUEST_ANSWER = "REQUEST_ANSWER";
export const ADD_SCORE = "ADD_SCORE";
export const ACTIVE_ITEM = "ACTIVE_ITEM";

interface ActiveItemAction {
  type: typeof ACTIVE_ITEM;
  index: number | null;
}

interface ResetGameAction {
  type: typeof RESET_GAME;
}

interface AddScoreAction {
  type: typeof ADD_SCORE;
}

interface CreateQuestionAction {
  type: typeof CREATE_QUESTION;
  answer: number;
  problems: string[];
}

interface SendUserAnswerAction {
  type: typeof SEND_USER_ANSWER;
  userAnswer: number;
}

interface RequestAnswerAction {
  type: typeof REQUEST_ANSWER;
}

export type QuestionActionTypes =
  | CreateQuestionAction
  | SendUserAnswerAction
  | RequestAnswerAction
  | AddScoreAction
  | ResetGameAction
  | ActiveItemAction;
