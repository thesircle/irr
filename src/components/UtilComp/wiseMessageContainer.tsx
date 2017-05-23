import {ShowWiseMessages} from './wiseMessageComp'
import { connect } from 'react-redux'
import {clearWiseMessage} from '../../actions/actions'

const mapStateToProps = (state,props) => {
  return {
    wiseMessages: state.wiseMessages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClearWiseMessage(index) {
      dispatch(
        clearWiseMessage(index)
      )
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowWiseMessages)