import React, { Component } from "react";

// redux dependancies
import * as actions from "../actions/";
import Question from "../components/Question";

class QuestionContainer extends Component {
  render() {
    return <Question question={[211, 211, 211]} />;
  }
}

export default QuestionContainer;
