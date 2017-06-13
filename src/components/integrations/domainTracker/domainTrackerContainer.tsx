// import { KaseyaComp } from './kaseyaComp'
import { connect }    from "react-redux";
import { withRouter } from "react-router-dom";
import {viewDomainTracker} from "../../../actions/actions";
import  {DomainTrackerComp} from "./domainTrackerComp";


const mapStateToProps = (state, props) => ({
  domainTrakerOBJ: state.domainTracker.data,
  domainTrackerFetchingWhois:state.domainTracker.domainTrackerFetchingWhois,
});

const mapDispatchToProps = dispatch => ({
    // onUpdateKaseya({url, userName, password}) {
    //   dispatch(
    //     updateKaseya(url, userName, password)
    //   )
    // },
  onViewDomainTracker() {
    dispatch(
        viewDomainTracker()
    );
  }
});

// const Container = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp)
export const domainTracker = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp);
