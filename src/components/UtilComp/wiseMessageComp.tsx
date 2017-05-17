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
                    <div key={i} className={this.getClass(message[0])}>
                      <p>{message[1]}</p>
                      <button onClick={() => (this.props as any).onClearError(i)}>X</button>
                    </div>)
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