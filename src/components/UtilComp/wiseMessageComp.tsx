import {Component} from 'react'
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
  getClass(type){
    switch(type) {
      case "w" : return "wise-warning"
      case "i" : return "wise-info"
      case "s" : return "wise-success"
      case "e" : return "wise-error"
      default:
        return ""
    }
  }
  render(){
    return(

      <div className="show-errors">
        {((this.state as any).wiseMessages.length) ?
          (this.state as any).wiseMessages.map((message, i) =>
              <div className="pgn-wrapper slideLeft" data-position="top-right">
                <div className="pgn push-on-sidebar-open pgn-circle">
                  <div className="alert alert-info">
                    <div >
                      <div className="pgn-thumbnail">
                      </div>
                      <div className="pgn-message">
                        <div>
                          <p className="bold">{message[0]}</p>
                          <p>{message[1]}</p>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="close"  data-dismiss="alert"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
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