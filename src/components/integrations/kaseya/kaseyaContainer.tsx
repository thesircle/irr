import {updateKaseya, viewKaseya} from "../../../actions/actions";
import { KaseyaComp } from "./kaseyaComp";
import { connect }    from "react-redux";
const mapStateToProps = (state, props) => ({
  url: state.kaseya.url,
  userName: state.kaseya.userName,
  password: state.kaseya.password,
  kaseyaFetching: state.kaseyaFetching,
  kaseyaTransmitting: state.kaseyaTransmitting
});

const mapDispatchToProps = dispatch => ({
  onUpdateKaseya({url, userName, password}) {
    dispatch(
        updateKaseya(url, userName, password)
    );
  },
  onViewKaseya() {
    dispatch(
        viewKaseya()
      );
  }
});

export const kaseyaContainer = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp);
