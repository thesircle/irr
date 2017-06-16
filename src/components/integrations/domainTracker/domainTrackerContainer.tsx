import { connect }    from "react-redux";
import { withRouter } from "react-router-dom";
import {aDomainTracker,whoisDomainTracker} from "../../../actions/actions";
import  {DomainTrackerComp} from "./domainTrackerComp";

const mapStateToProps = (state, props) => ({
  domainTrackerWhois:state.domainTrackerWhois,
  domainTrackerA:state.domainTrackerA
});

const mapDispatchToProps = dispatch => ({
    // onUpdateKaseya({url, userName, password}) {
    //   dispatch(
    //     updateKaseya(url, userName, password)
    //   )
    // },
  onViewDomainTracker() {
    dispatch(aDomainTracker());
    dispatch(whoisDomainTracker());
  }
});

// const Container = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp)
export const domainTracker = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp);