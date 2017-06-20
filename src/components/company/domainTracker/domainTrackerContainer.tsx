import { connect }    from "react-redux";
import {aDomainTracker,whoisDomainTracker,dnsDomainTracker} from "../../../actions/actions";
import  {DomainTrackerComp} from "./domainTrackerComp";

const mapStateToProps = (state, props) => ({
  domainTracker:state.domainTracker
});

const mapDispatchToProps = dispatch => ({

  onViewDomainTracker() {
    dispatch(aDomainTracker());
    dispatch(whoisDomainTracker());
    dispatch(dnsDomainTracker());
  }
});

export const domainTracker = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp);