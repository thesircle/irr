import { connect }    from "react-redux";
import { withRouter } from "react-router-dom";
import {rootComp as RootComp} from "./rootComp";

import {KaseyaComp} from "../integrations/kaseya/kaseyaComp";


const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch => ({

});
export const container = connect(mapStateToProps, mapDispatchToProps)(RootComp);
