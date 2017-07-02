import { clearWiseMessage} from "../../actions/actions";
import { connect } from "react-redux";
import {Component} from "react";
import {RouteComponentProps} from "react-router";
import {system as S} from "../../constants/system";

export class WiseMessage{
  type:string;
  heading:string;
  message:string;
}
interface IProps{
  wiseMessages:IWiseObj[];
  onClearWiseMessage:(n:number) => void;
}

interface IState{
  wiseMessages:IWiseObj[];
  onClearWiseMessage:(n:number) => void;
}

interface IStateForContainer{
  wiseMessages:IWiseObj[];
}

export interface IWiseObj{
  type:string;
  heading:string;
  message:string;
}


interface INextProps{
  wiseMessages:IWiseObj[];
}

export class ShowWiseMessages extends Component<IProps,IState> {
  constructor() {
    super();
    this.state = {
      wiseMessages: [],
      onClearWiseMessage: (f) => f
    };
  }
  componentWillReceiveProps(nextProps:INextProps):void{
    this.setState({
      wiseMessages: nextProps.wiseMessages
    });
  }
  getClassAndHeading(type:string){
    switch(type) {
    case S.WISE_MESSAGE.WARNING :
      return {
        "class":"wise-warning",
        "heading":S.WISE_MESSAGE.WARNING_HEADING
      };
    case S.WISE_MESSAGE.INFO :
      return {
        "class":"wise-info",
        "heading":S.WISE_MESSAGE.INFO_HEADING
      };
    case S.WISE_MESSAGE.SUCCESS :
      return {
        "class":"wise-success",
        "heading":S.WISE_MESSAGE.SUCCESS_HEADING
      };
    case S.WISE_MESSAGE.ERROR :
      return {
        "class":"wise-error",
        "heading":S.WISE_MESSAGE.ERROR_HEADING
      };
    default:
      return {
        "class":"",
        "heading":""
      };
    }
  }
  render(){
    return(
      <div className="wise-message-wrapper">
        {(this.state.wiseMessages.length) ?
          this.state.wiseMessages.map((wiseObj:IWiseObj, i:number) => {
            let classAndHeading = this.getClassAndHeading(wiseObj.type);
            return (
              <div key={i} className="pgn-wrapper slideLeft" data-position="top-right">
                <div className="pgn push-on-sidebar-open pgn-circle">
                  <div className={classAndHeading.class + " alert"}  >
                    <div >
                      <div className="pgn-thumbnail">
                      </div>
                      <div className="pgn-message">
                        <div>
                          <p className="bold">
                            {(wiseObj.heading)?wiseObj.heading:classAndHeading.heading}
                          </p>
                          <p>{wiseObj.message}</p>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="close" onClick={():void => this.props.onClearWiseMessage(i)}>
                      <span aria-hidden="true">×</span>
                      <span className="sr-only">Close</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
          : null
        }
      </div>
    );
  }
}


const mapStateToProps = (state:IState, props:IProps):IStateForContainer => {
  return {
    wiseMessages: state.wiseMessages,
  };
};
const mapDispatchToProps = (dispatch:Function) => {
  return {
    onClearWiseMessage(index:string):void {
      dispatch(
        clearWiseMessage(index)
      );
    }
  };
};
export const showErrors =
  connect<IStateForContainer,void,IProps >(mapStateToProps,
                                          mapDispatchToProps)
                                          (ShowWiseMessages);

// {(message[0] === "e")? "wise-error": "wise-success"}

// export const ShowWiseMessages = ({ wiseMessages=["boom","boom-again"]})  =>
// export const ShowWiseMessages = ({ wiseMessages=[]})  =>
//working
// export const ShowWiseMessages = ({ wiseMessages=["boom","error"]})  =>
//
//   <div className="show-wiseMessages">
//     {(wiseMessages.length) ?
//     wiseMessages.map((message, i)  =>
//                 <div key={i} className="error">
//                   <p>{message}</p>
//                 </div>)
//     : null
//     }
//   </div>