import {updateKaseya, viewKaseya} from "../../../actions/actions";
import { KaseyaComp } from "./kaseyaComp";
import { connect }    from "react-redux";
const mapStateToProps:any = (state, props):any => ({
  url: state.kaseya.url,
  userName: state.kaseya.userName,
  password: state.kaseya.password,
  kaseyaFetching: state.kaseyaFetching,
  kaseyaTransmitting: state.kaseyaTransmitting
});

const mapDispatchToProps:any = (dispatch):any => ({
  onUpdateKaseya({url, userName, password}:any):void {
    dispatch(
        updateKaseya(url, userName, password)
    );
  },
  onViewKaseya() :void{
    dispatch(
        viewKaseya()
      );
  }
});

export const kaseyaContainer:any = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp);
