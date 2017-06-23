import {updateKaseya, viewKaseya} from "../../../actions/actions";
import { KaseyaComp } from "./kaseyaComp";
import { connect}    from "react-redux";
interface IState{
  kaseya:Kaseya;
  kaseyaFetching:boolean;
  kaseyaTransmitting:boolean;
}
interface IProps{

}
interface Kaseya{
  url:string;
  userName:string;
  password:string;

}
const mapStateToProps = (state:IState, props:IProps) => ({
  url: state.kaseya.url,
  userName: state.kaseya.userName,
  password: state.kaseya.password,
  kaseyaFetching: state.kaseyaFetching,
  kaseyaTransmitting: state.kaseyaTransmitting
});

const mapDispatchToProps = (dispatch:Function) => ({
  onUpdateKaseya(url:string, userName:string, password:string):void {
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

export const kaseyaContainer = connect(mapStateToProps, mapDispatchToProps)(KaseyaComp);
