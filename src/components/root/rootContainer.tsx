import { connect }    from "react-redux";
import {rootComp as RootComp} from "./rootComp";
interface State{

}
interface Props{

}
const mapStateToProps = (state:State, props:Props) => ({
});

const mapDispatchToProps = (dispatch:Function) => ({

});
export const container = connect(mapStateToProps, mapDispatchToProps)(RootComp);
