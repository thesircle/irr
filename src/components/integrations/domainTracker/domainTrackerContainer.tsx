// import { KaseyaComp } from './kaseyaComp'
import  {DomainTrackerComp} from "./domainTrackerComp";
import { connect }    from "react-redux";
import { withRouter } from "react-router-dom";
import {viewDomainTracker} from "../../../actions/actions";


const mapStateToProps:any = (state, props):any => ({
  domainTrakerOBJ: state.domainTracker.data,
  domainTrackerFetchingWhois:state.domainTracker.domainTrackerFetchingWhois,
});

const mapDispatchToProps:any = (dispatch):any => ({
    // onUpdateKaseya({url, userName, password}) {
    //   dispatch(
    //     updateKaseya(url, userName, password)
    //   )
    // },
  onViewDomainTracker():void {
    dispatch(
        viewDomainTracker()
    );
  }
});

// const Container = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp)
export const domainTracker:any = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp);
