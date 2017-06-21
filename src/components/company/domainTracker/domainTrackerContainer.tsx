import { connect }    from "react-redux";
import {aDomainTracker,whoisDomainTracker,dnsDomainTracker} from "../../../actions/actions";
import  {DomainTrackerComp} from "./domainTrackerComp";

const mapStateToProps = (state, props) => ({
  domainTracker:state.domainTracker
});

const mapDispatchToProps = dispatch => ({

  onViewDomainTracker(domainName) {
    dispatch(aDomainTracker(domainName));
    dispatch(whoisDomainTracker(domainName));
    dispatch(dnsDomainTracker(domainName));
  }
});

export const domainTracker = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp);