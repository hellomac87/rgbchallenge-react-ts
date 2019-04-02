export type QuestionState = number[];

export const CREATE_QUESTION = "CREATE_QUESTION";
export type CREATE_QUESTION = typeof CREATE_QUESTION;

export interface IcreateQuestion {
  type: CREATE_QUESTION;
}
