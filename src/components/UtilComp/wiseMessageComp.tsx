import {Component} from "react";
import {system as S} from "../../constants/system";
// import CloseButton from 'react-icons/lib/fa/close'
interface IState{
  wiseMessages:WiseObj[];
  onClearWiseMessage:Function;

}
interface WiseObj{
  type:string;
  heading:string;
  message:string;
}
interface NextProps{
  wiseMessages:WiseObj[];
}
interface A{
  class:string;
  heading:string;
}
interface Props{
  onClearWiseMessage:Function;
}
export class ShowWiseMessages extends Component<any,IState> {
  constructor() {
    super();
    this.state = {
      wiseMessages: [],
      onClearWiseMessage: (f:Function) => f};
  }
  componentWillReceiveProps(nextProps:NextProps):void{
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
    let state = this.state;
    return(
      <div className="wise-message-wrapper">
        {(state.wiseMessages.length) ?
          state.wiseMessages.map((wiseObj:WiseObj, i:number) => {
            let classAndHeading:A= this.getClassAndHeading(wiseObj.type);
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