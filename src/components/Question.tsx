import React from "react";

import classNames from "classnames/bind";

import styles from "./Question.module.scss";

const cx = classNames.bind(styles);

export interface Props {
  question: number[];
}

const Question = ({ question }: Props) => {
  return (
    <div className={cx("container")}>
      {question[0]},{question[1]},{question[2]}
      <div className={cx("circle")} />
    </div>
  );
};

export default Question;
