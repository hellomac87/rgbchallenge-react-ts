import { CREATE_QUESTION } from "./types";

export const randomMath = (): number => {
  return Math.floor(Math.random() * (255 - 0 + 1) + 0);
};

export const answer = (): number => {
  return Math.floor(Math.random() * 3);
};

export const problem = (): [number, number, number] => {
  return [randomMath(), randomMath(), randomMath()];
};

// action creator
export const createQuestion = () => {
  console.log("createQuestion");
  return {
    type: CREATE_QUESTION,
    answer: answer(),
    problem: problem()
  };
};
