import React, { Component } from "react";

// types dependencies
import { StoreState } from "../types";

// redux dependencies
import * as actions from "../actions";
import { connect } from "react-redux";
import { returntypeof } from "react-redux-typescript";
// component dependencies
import Question from "../components/Question";

const mapStateToProps = (state: StoreState) => {
  return {
    question: state.question
  };
};

const dispatchToProps = {
  createQuestion: actions.createQuestion
};
// type definition
const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;

class QuestionContainer extends Component<Props, {}> {
  render() {
    const { question, createQuestion } = this.props;
    return (
      <div>
        <Question question={question} />
        <button onClick={createQuestion}>button</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(QuestionContainer);
