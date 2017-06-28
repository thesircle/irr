// import {aDomainTracker,dnsDomainTracker,whoisDomainTracker} from "../../../actions/actions";
// import { connect }    from "react-redux";
// import {Dispatch} from "redux";
// import {DomainTrackerComp} from "./domainTrackerComp";
//
// interface Iprops{
//
// }
// interface Istate{
//   domainTracker:{};
// }
// const mapStateToProps = (state:Istate, props:Iprops) => ({
//   domainTracker:state.domainTracker
// });
//
// const mapDispatchToProps = (dispatch:Dispatch<string>) => ({
//
//   onViewDomainTracker(domainName:string) {
//     dispatch(aDomainTracker(domainName));
//     dispatch(whoisDomainTracker(domainName));
//     dispatch(dnsDomainTracker(domainName));
//   }
// });
//
// export const domainTracker = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp);