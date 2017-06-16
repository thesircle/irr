import { connect } from "react-redux";
import {ShowWiseMessages} from "./wiseMessageComp";
import {clearWiseMessage} from "../../actions/actions";

const mapStateToProps:any = (state,props):any => {
  return {
    wiseMessages: state.wiseMessages
  };
};

const mapDispatchToProps:any = (dispatch):any => {
  return {
    onClearWiseMessage(index:string):void {
      dispatch(
        clearWiseMessage(index)
      );
    }
  };
};
export const showErrors:any = connect(mapStateToProps, mapDispatchToProps)(ShowWiseMessages);

