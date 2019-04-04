// types dependencies
import { AppState } from "../store";

// redux dependencies
import { toggleModal } from "../store/modal/actions";
import { connect } from "react-redux";

// component dependencies
import Modal from "../components/Modal";

// mapStateToProps
const mapStateToProps = (state: AppState) => {
  return {
    modal: state.modal
  };
};

export default connect(
  mapStateToProps,
  { toggleModal }
)(Modal);
