import React from "react";

import { QuestionState } from "../store/question/types";
import { requestAnswer, resetGame } from "../store/question/actions";

import classNames from "classnames/bind";

import styles from "./Question.module.scss";

const cx = classNames.bind(styles);

interface Props {
  question: QuestionState;
  requestAnswer: typeof requestAnswer;
  resetGame: typeof resetGame;
}

const Question = ({ question, requestAnswer, resetGame }: Props) => {
  return (
    <section className={cx("container")}>
      <article>
        <h1>RGB CHALLENGE</h1>
      </article>

      {question.problems[question.answer]}
      <br />
      <span>{question.score}</span>
      <br />
      {question.problems.map((p: string, i: number) => (
        <span
          key={i}
          onClick={() => requestAnswer(i)}
          className={cx("circle", question.activeItem === i && "active")}
          style={{ backgroundColor: p }}
        />
      ))}

      <br />
      <button onClick={() => resetGame()}>start</button>
    </section>
  );
};

export default Question;
