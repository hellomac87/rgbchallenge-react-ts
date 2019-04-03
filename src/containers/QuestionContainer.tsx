// types dependencies
import { AppState } from "../store";

// redux dependencies
import {
  createQuestion,
  sendUserAnswer,
  requestAnswer
} from "../store/question/actions";
import { connect } from "react-redux";

// component dependencies
import Question from "../components/Question";

// mapStateToProps
const mapStateToProps = (state: AppState) => {
  return {
    question: state.question
  };
};

export default connect(
  mapStateToProps,
  { createQuestion, sendUserAnswer, requestAnswer }
)(Question);
