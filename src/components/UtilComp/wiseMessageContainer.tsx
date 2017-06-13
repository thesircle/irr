import { connect } from "react-redux";
import {clearWiseMessage} from "../../actions/actions";
import {ShowWiseMessages} from "./wiseMessageComp";


const mapStateToProps = (state,props)=>{
  return {
    wiseMessages: state.wiseMessages
  };
};

const mapDispatchToProps = dispatch=>{
  return {
    onClearWiseMessage(index) {
      dispatch(
        clearWiseMessage(index)
      );
    }
  };
};
export const showErrors = connect(mapStateToProps, mapDispatchToProps)(ShowWiseMessages);

