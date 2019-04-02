import React, { Component } from "react";

// types dependencies
import { StoreState } from "../types";

// redux dependencies
import * as actions from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// component dependencies
import Question from "../components/Question";

interface IQuestionProps {
  question: number[];
}

interface IQuestionState {}

class QuestionContainer extends Component<IQuestionProps, IQuestionState> {
  render() {
    const { question } = this.props;
    return (
      <div>
        <Question question={question} />
        <button>button</button>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return {
    question: state.question
  };
};

export default connect(mapStateToProps)(QuestionContainer);
