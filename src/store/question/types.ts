// declare reducer state type
export interface QuestionState {
  answer: number;
  problems: string[];
  // activeItem: number | null;
}

// constants for actions & reducers
export const CREATE_QUESTION = "CREATE_QUESTION";

interface CreateQuestionAction {
  type: typeof CREATE_QUESTION;
  answer: number;
  problems: string[];
}

export type QuestionActionTypes = CreateQuestionAction;
