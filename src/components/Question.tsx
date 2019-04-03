import React from "react";

import { QuestionState } from "../store/question/types";
import {
  createQuestion,
  sendUserAnswer,
  requestAnswer
} from "../store/question/actions";

import classNames from "classnames/bind";

import styles from "./Question.module.scss";

const cx = classNames.bind(styles);

interface Props {
  question: QuestionState;
  createQuestion: typeof createQuestion;
  sendUserAnswer: typeof sendUserAnswer;
  requestAnswer: typeof requestAnswer;
}

const Question = ({
  question,
  createQuestion,
  sendUserAnswer,
  requestAnswer
}: Props) => {
  return (
    <div className={cx("container")}>
      {question.problems[question.answer]}
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
      <button onClick={() => createQuestion()}>start</button>
    </div>
  );
};

export default Question;
