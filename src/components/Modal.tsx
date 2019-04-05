import React from "react";

import { ModalState } from "../store/modal/types";

import { QuestionState } from "../store/question/types";
import { resetGame } from "../store/question/actions";

import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

interface Props {
  modal: ModalState;
  question: QuestionState;
  resetGame: typeof resetGame;
}

const Modal = ({ modal, question, resetGame }: Props) => {
  return (
    <div className={cx("container", modal.show && "show")}>
      <div className={cx("inner")}>틀렸지롱</div>
      <div>{question.score}</div>
      <div onClick={() => resetGame()}>재시작</div>
    </div>
  );
};

export default Modal;
