import { connect }    from "react-redux";
import {rootComp as RootComp} from "./rootComp";

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch => ({

});
export const container = connect(mapStateToProps, mapDispatchToProps)(RootComp);
