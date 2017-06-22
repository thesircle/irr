import { connect } from "react-redux";
import {ShowWiseMessages} from "./wiseMessageComp";
import {clearWiseMessage} from "../../actions/actions";
interface State{
  wiseMessages:Object[];
}
interface Props{

}
const mapStateToProps = (state:State,props:Props) => {
  return {
    wiseMessages: state.wiseMessages
  };
};
const mapDispatchToProps = (dispatch:Function) => {
  return {
    onClearWiseMessage(index:string):void {
      dispatch(
        clearWiseMessage(index)
      );
    }
  };
};
export const showErrors = connect(mapStateToProps, mapDispatchToProps)(ShowWiseMessages);