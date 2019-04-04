import React from "react";

import { QuestionState } from "../store/question/types";
import {
  createQuestion,
  sendUserAnswer,
  requestAnswer,
  resetGame
} from "../store/question/actions";

import classNames from "classnames/bind";

import styles from "./Question.module.scss";

const cx = classNames.bind(styles);

interface Props {
  question: QuestionState;
  createQuestion: typeof createQuestion;
  sendUserAnswer: typeof sendUserAnswer;
  requestAnswer: typeof requestAnswer;
  resetGame: typeof resetGame;
}

const Question = ({
  question,
  createQuestion,
  sendUserAnswer,
  requestAnswer,
  resetGame
}: Props) => {
  return (
    <div className={cx("container")}>
      {question.problems[question.answer]}
      <br />
      <span>{question.score}</span>
      <br />
      {question.problems.map((p: string, i: number) => (
        <span
          key={i}
          onClick={() => requestAnswer(i)}
          className={cx("circle")}
          style={{ backgroundColor: p }}
        />
      ))}

      <br />
      <button onClick={() => resetGame()}>start</button>
    </div>
  );
};

export default Question;
