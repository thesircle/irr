import {ShowErrors} from './errorComp'
import { connect } from 'react-redux'
import {clearError} from '../../actions/actions'

const mapStateToProps = (state,props) => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClearError(index) {
      dispatch(
        clearError(index)
      )
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowErrors)