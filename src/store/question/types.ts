// declare reducer state type
export type QuestionState = number[];

// constants for actions & reducers
export const CREATE_QUESTION = "CREATE_QUESTION";
export type CREATE_QUESTION = typeof CREATE_QUESTION;

// interface for actions
export interface IcreateQuestion {
  type: CREATE_QUESTION;
}
