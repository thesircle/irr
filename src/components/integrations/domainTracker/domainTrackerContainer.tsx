// import { KaseyaComp } from './kaseyaComp'
import  {DomainTrackerComp} from "./domainTrackerComp";
import { connect }    from "react-redux";
import {viewDomainTracker} from "../../../actions/actions";
interface IProps{
}
interface IState{
  domainTracker:DomainTrackerr;
}
interface DomainTrackerr{
  data:{};
  domainTrackerFetchingWhois:{};
}
const mapStateToProps = (state:IState, props:IProps) => ({
  domainTrakerOBJ: state.domainTracker.data,
  domainTrackerFetchingWhois:state.domainTracker.domainTrackerFetchingWhois,
});

const mapDispatchToProps = (dispatch:Function) => ({
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
