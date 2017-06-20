import { connect }    from "react-redux";
import {aDomainTracker,whoisDomainTracker} from "../../../actions/actions";
import  {DomainTrackerComp} from "./domainTrackerComp";

const mapStateToProps = (state, props) => ({
  domainTracker:state.domainTracker
});

const mapDispatchToProps = dispatch => ({

  onViewDomainTracker() {
    dispatch(aDomainTracker());
    dispatch(whoisDomainTracker());
  }
});

export const domainTracker = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp);