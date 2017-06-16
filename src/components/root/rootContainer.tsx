import { connect }    from "react-redux";
import {rootComp as RootComp} from "./rootComp";

const mapStateToProps:any = (state, props):any => ({
});

const mapDispatchToProps:any = (dispatch):any => ({

});
export const container:any = connect(mapStateToProps, mapDispatchToProps)(RootComp);
