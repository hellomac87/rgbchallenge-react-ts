import React from "react";

import classNames from "classnames/bind";

import styles from "./Question.module.scss";

const cx = classNames.bind(styles);

export interface Props {
  question: number[];
}

const Question = ({ question }: Props) => {
  return <div className={cx("container")}>{question}</div>;
};

export default Question;
