// import { KaseyaComp } from './kaseyaComp'
import  {DomainTrackerComp} from './domainTrackerComp'
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'
import {viewDomainTracker} from '../../../actions/actions'


const mapStateToProps = (state, props) =>
  ({
     domainTrakerOBJ: state.domainTracker.data,
      domainTrackerFetchingWhois:state.domainTracker.domainTrackerFetchingWhois,
  })

const mapDispatchToProps = dispatch =>
  ({
    // onUpdateKaseya({url, userName, password}) {
    //   dispatch(
    //     updateKaseya(url, userName, password)
    //   )
    // },
    onViewDomainTracker() {
      dispatch(
        viewDomainTracker()
      )
    }
  })

// const Container = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp)
const Container = connect(mapStateToProps, mapDispatchToProps)(DomainTrackerComp)
export default (withRouter as any)(Container)

