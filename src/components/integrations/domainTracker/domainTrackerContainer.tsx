// import { KaseyaComp } from './kaseyaComp'
import  {DomainTrackerComp} from "./domainTrackerComp";
import { connect }    from "react-redux";
import {viewDomainTracker} from "../../../actions/actions";
interface Props{

}
interface State{
  domainTracker:DomainTrackerr;
}
interface DomainTrackerr{
  data:{};
  domainTrackerFetchingWhois:{};
}
const mapStateToProps = (state:State, props:Props) => ({
  domainTrakerOBJ: state.domainTracker.data,
  domainTrackerFetchingWhois:state.domainTracker.domainTrackerFetchingWhois,
});

const mapDispatchToProps = (dispatch:Function) => ({
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
export const domainTracker = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp as any);
