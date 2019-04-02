import React, { Component } from "react";

import classNames from "classnames/bind";

import styles from "./App.module.scss";

import { QuestionState } from "./store/question/types";
import QuestionContainer from "./containers/QuestionContainer";

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <div className={cx("container")}>
        react
        <QuestionContainer />
      </div>
    );
  }
}

export default App;
