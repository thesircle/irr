import {Component} from 'react'
import S from '../../constants/system'
// import CloseButton from 'react-icons/lib/fa/close'

export class ShowWiseMessages extends Component<{},{}> {
  constructor(props) {
    super(props);
    this.state = {wiseMessages: [], onClearError: f=>f}
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      wiseMessages: nextProps.wiseMessages
    })
  }
  getClassAndHeading(type):any{
    switch(type) {
      case S.WISE_MESSAGE.WARNING :
        return {"class":"wise-warning",
                "heading":S.WISE_MESSAGE.WARNING_HEADING
                }
      case S.WISE_MESSAGE.INFO :
        return {"class":"wise-info",
                "heading":S.WISE_MESSAGE.INFO_HEADING
                }
      case S.WISE_MESSAGE.SUCCESS :
        return {"class":"wise-success",
                "heading":S.WISE_MESSAGE.SUCCESS_HEADING
                }
      case S.WISE_MESSAGE.ERROR :
        return {"class":"wise-error",
                "heading":S.WISE_MESSAGE.ERROR_HEADING
                }
      default:
        return ""
    }
  }

  render(){
    let state = this.state as any;
    return(
      <div className="wise-message-wrapper">
        {(state.wiseMessages.length) ?
          state.wiseMessages.map((message, i) =>
            <div className="pgn-wrapper slideLeft" data-position="top-right" key={i}>
              <div className="pgn push-on-sidebar-open pgn-circle">
                <div className={this.getClassAndHeading(message[0]).class + " alert"}  >
                  <div >
                    <div className="pgn-thumbnail">
                    </div>
                    <div className="pgn-message">
                      <div>
                        <p className="bold">
                          {(message[2])?message[2]:this.getClassAndHeading(message[0]).heading}
                        </p>
                        <p>{message[1]}</p>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="close" data-dismiss="alert">
                    <span aria-hidden="true">×</span>
                    <span className="sr-only">Close</span>
                  </button>
                </div>
              </div>
            </div>
          )
        : null
        }
      </div>
    )
  }
}

// {(message[0] === "e")? "wise-error": "wise-success"}

// export const ShowWiseMessages = ({ wiseMessages=["boom","boom-again"]}) =>
// export const ShowWiseMessages = ({ wiseMessages=[]}) =>
//working
// export const ShowWiseMessages = ({ wiseMessages=["boom","error"]}) =>
//
//   <div className="show-wiseMessages">
//     {(wiseMessages.length) ?
//     wiseMessages.map((message, i) =>
//                 <div key={i} className="error">
//                   <p>{message}</p>
//                 </div>)
//     : null
//     }
//   </div>