import { RootComp } from './rootComp'
import { withRouter } from 'react-router-dom'
import { connect }    from 'react-redux'
import {KaseyaComp} from "../integrations/kaseya/kaseyaComp";


const mapStateToProps = (state, props) =>
  ({
  })

const mapDispatchToProps = dispatch =>
  ({

  })

const Container = connect(mapStateToProps, mapDispatchToProps)(RootComp)

export default (withRouter as any)(Container)

