import React from "react";

import { ModalState } from "../store/modal/types";
import { toggleModal } from "../store/modal/actions";

import classNames from "classnames/bind";

import styles from "./Modal.module.scss";

const cx = classNames.bind(styles);

interface Props {
  modal: ModalState;
  toggleModal: typeof toggleModal;
}

const Modal = ({ modal, toggleModal }: Props) => {
  return (
    <div className={cx("container", modal.show && "show")}>
      <div className={cx("inner")}>틀렸지롱</div>
      <div onClick={() => toggleModal(false)}>재시작</div>
    </div>
  );
};

export default Modal;
