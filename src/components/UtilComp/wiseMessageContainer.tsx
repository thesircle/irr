import { connect } from "react-redux";
import {ShowWiseMessages} from "./wiseMessageComp";
import {clearWiseMessage} from "../../actions/actions";

const mapStateToProps = (state,props) => {
  return {
    wiseMessages: state.wiseMessages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClearWiseMessage(index) {
      dispatch(
        clearWiseMessage(index)
      );
    }
  };
};
export const showErrors = connect(mapStateToProps, mapDispatchToProps)(ShowWiseMessages);

