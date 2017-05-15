import {Component} from 'react'
// import CloseButton from 'react-icons/lib/fa/close'

export class ShowErrors extends Component<{},{}> {
  constructor(props) {
    super(props);
    this.state = {errors: [], onClearError: f=>f}
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      errors: nextProps.errors
    })
  }
  render(){
    return(
      <div className="show-errors">
        {((this.state as any).errors.length) ?
          (this.state as any).errors.map((message, i) =>
                    <div key={i} className="error">
                      <p>{message}</p>
                      <p onClick={() => (this.state as any).onClearError(i)}>X</p>
                    </div>)
        : null
        }
      </div>
    )
  }
}


// export const ShowErrors = ({ errors=["boom","boom-again"]}) =>
// export const ShowErrors = ({ errors=[]}) =>
//working
// export const ShowErrors = ({ errors=["boom","error"]}) =>
//
//   <div className="show-errors">
//     {(errors.length) ?
//     errors.map((message, i) =>
//                 <div key={i} className="error">
//                   <p>{message}</p>
//                 </div>)
//     : null
//     }
//   </div>