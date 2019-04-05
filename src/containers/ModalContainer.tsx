// types dependencies
import { AppState } from "../store";

// redux dependencies
import { resetGame } from "../store/question/actions";

import { connect } from "react-redux";

// component dependencies
import Modal from "../components/Modal";

// mapStateToProps
const mapStateToProps = (state: AppState) => {
  return {
    question: state.question,
    modal: state.modal
  };
};

export default connect(
  mapStateToProps,
  { resetGame }
)(Modal);
