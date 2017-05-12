import {ShowErrors} from './errorComp'
import { connect } from 'react-redux'

const mapStateToProps = (state,props) => {
  return {
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {


  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowErrors)