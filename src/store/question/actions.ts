import { CREATE_QUESTION, SEND_USER_ANSWER } from "./types";

export const randomMath = (): number => {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
};

export const answer = (): number => {
  return Math.floor(Math.random() * 3);
};

export const createRGB = (): string => {
  return `rgb(${randomMath()},${randomMath()},${randomMath()})`;
};

export const problems = (): string[] => {
  return [createRGB(), createRGB(), createRGB()];
};

// action creator
export const createQuestion = () => {
  return {
    type: CREATE_QUESTION,
    answer: answer(),
    problems: problems()
  };
};

export const sendUserAnswer = (userAnswer: number) => {
  return {
    type: SEND_USER_ANSWER,
    userAnswer
  };
};
