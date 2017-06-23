import { connect }    from "react-redux";
import {rootComp as RootComp} from "./rootComp";
interface State{

}
interface Iprops{

}
const mapStateToProps = (state:State, props:Iprops) => ({
});

const mapDispatchToProps = (dispatch:Function) => ({

});
export const container = connect(mapStateToProps, mapDispatchToProps)(RootComp);
