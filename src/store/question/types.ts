// declare reducer state type
export interface QuestionState {
  answer: number;
  problems: string[];
  activeItem: number | null;
  userAnswer: number | null;
}

// constants for actions & reducers
export const CREATE_QUESTION = "CREATE_QUESTION";
export const SEND_USER_ANSWER = "SEND_USER_ANSWER";

interface CreateQuestionAction {
  type: typeof CREATE_QUESTION;
  answer: number;
  problems: string[];
}

interface SendUserAnswerAction {
  type: typeof SEND_USER_ANSWER;
  userAnswer: number;
}

export type QuestionActionTypes = CreateQuestionAction | SendUserAnswerAction;
