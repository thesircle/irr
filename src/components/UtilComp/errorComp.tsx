import {Component} from 'react'

export class ShowErrors extends Component<{},{}> {
  constructor(props) {
    super(props);
    this.state = {errors: []}
  }
  componentWillReceiveProps(nextProps){
    this.setState({errors: nextProps.errors})
  }
  render(){
    return(
      <div className="show-errors">
        {((this.state as any).errors.length) ?
          (this.state as any).errors.map((message, i) =>
                    <div key={i} className="error">
                      <p>{message}</p>
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