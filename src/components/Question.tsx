import React from "react";

import { QuestionState } from "../store/question/types";
import { createQuestion } from "../store/question/actions";

import classNames from "classnames/bind";

import styles from "./Question.module.scss";

const cx = classNames.bind(styles);

interface Props {
  question: QuestionState;
  createQuestion: typeof createQuestion;
}

const Question = ({ question, createQuestion }: Props) => {
  return (
    <div className={cx("container")}>
      {question.answer}
      <br />
      {question.problems[0]},{question.problems[1]},{question.problems[2]}
      <br />
      <button onClick={createQuestion}>start</button>
    </div>
  );
};

export default Question;
