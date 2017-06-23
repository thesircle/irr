import { connect } from "react-redux";
import {ShowWiseMessages} from "./wiseMessageComp";
import {clearWiseMessage} from "../../actions/actions";
interface Istate{
  wiseMessages:Object[];
}
interface Iprops{

}
const mapStateToProps = (state:Istate,props:Iprops) => {
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