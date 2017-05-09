import { KaseyaComp } from './kaseyaComp'
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'
import { updateKaseya } from '../../../actions/actions'


const mapStateToProps = (state, props) =>
  ({
    url: state.kaseya.url,
    companyId: state.kaseya.companyId,
    userName: state.kaseya.userName,
    password: state.kaseya.password
  })

const mapDispatchToProps = dispatch =>
  ({
    onCreateUser({url, companyId, userName, password}) {
      dispatch(
        updateKaseya(url, companyId, userName, password)
      )
    }
  })

const Container = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp)

export default (withRouter as any)(Container)

