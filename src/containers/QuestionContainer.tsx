import React, { Component } from "react";

// types dependencies
import { StoreState } from "../store";

// redux dependencies
import { createQuestion } from "../store/question/actions";
import { connect } from "react-redux";
import { returntypeof } from "react-redux-typescript";

// component dependencies
import Question from "../components/Question";

// mapStateToProps
const mapStateToProps = (state: StoreState) => {
  return {
    question: state.question
  };
};

// dispatchToProps
const dispatchToProps = {
  createQuestion: createQuestion
};

// type definition
const stateProps = returntypeof(mapStateToProps);
type Props = typeof stateProps & typeof dispatchToProps;

/*
type Props = {
  question: number[];
  createQuestion: typeof actions.createQuestion;
};
*/

class QuestionContainer extends Component<Props> {
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
