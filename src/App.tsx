import React, { Component } from "react";

import classNames from "classnames/bind";

import styles from "./App.module.scss";

import QuestionContainer from "./containers/QuestionContainer";
import ModalContainer from "./containers/ModalContainer";

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={cx("container")}>
        react
        <QuestionContainer />
        <ModalContainer />
      </div>
    );
  }
}

export default App;
