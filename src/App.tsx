import React, { Component } from "react";

import classNames from "classnames/bind";

import styles from "./App.module.scss";

import QuestionContainer from "./containers/QuestionContainer";
import ModalContainer from "./containers/ModalContainer";

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    return (
      <section className={cx("container")}>
        <article>
          <header className={cx("header")}>
            <h1 className={cx("title")}>RGB</h1>
            <h2 className={cx("sub_title")}>GUESSING CHALLENGE</h2>
          </header>

          <section className={cx("content")}>
            <QuestionContainer />
            <ModalContainer />
          </section>
        </article>
      </section>
    );
  }
}

export default App;
