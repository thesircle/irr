// import { KaseyaComp } from './kaseyaComp'
import  {DomainTrackerComp} from './domainTrackerComp'
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'
import {viewDomainTracker,DnsDomainTracker,MxDomainTracker,SpfDomainTracker,TxtDomainTracker,WhoisDomainTracker,PtrDomainTracker,ADomainTracker} from '../../../actions/actions'


const mapStateToProps = (state, props) =>
  ({
      domainTrackerDns:state.domainTrackerDns,
      domainTrackerMx:state.domainTrackerMx,
      domainTrackerTxt:state.domainTrackerTxt,
      domainTrackerSpf:state.domainTrackerSpf,
      domainTrackerWhois:state.domainTrackerWhois,
      domainTrackerPtr:state.domainTrackerPtr,
      domainTrackerA:state.domainTrackerA,
      wasif:state
  })

const mapDispatchToProps = dispatch =>
  ({
    // onUpdateKaseya({url, userName, password}) {
    //   dispatch(
    //     updateKaseya(url, userName, password)
    //   )
    // },
    onViewDomainTracker() {
      dispatch(DnsDomainTracker())
       dispatch( MxDomainTracker())
        dispatch(SpfDomainTracker())
        dispatch(TxtDomainTracker())
        dispatch(WhoisDomainTracker())
        dispatch(PtrDomainTracker())
        dispatch(ADomainTracker())
    }
  })

// const Container = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp)
const Container = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp)
export default (withRouter as any)(Container)

