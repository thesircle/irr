import {Component} from "react";
import {lang as L} from "../../../constants/lang";

export class DataTable extends Component<any,any> {
  constructor(props)
  {
    super(props);
    this.state = {
      data:{}
    };
    this.statusImage = this.statusImage.bind(this);
  }
  componentWillReceiveProps(nextProps)
  {
    this.setState({data:nextProps.data as any});
  }

  statusImage(status ,key){
    if(status === "[GREEN]") {
      return <td key={key} className="text-center"><img src="/img/icon_circle_success.svg"/></td>;
    }
    else if(status === "[RED]") {
      return <td key={key} className="text-center"><img src="/img/icon_circle_error.svg"/></td>;
    }
    else {
      return <td key={key} className="text-center"><img src="/img/icon_circle_warning.svg"/></td>;
    }

  }

  render(){

    let props = this.props as any;
    let state=this.state as any;
    if(props.loader) {
      return (<div className="text-center"><img src="/img/icon_circle_warning.svg" className="imgLoader"/></div>);
    }
    else {
      let td_class = props.heading === "yes" ? "text-center" : "";
      let headings = Object.keys(state.data[0]);
      if(props.linkColumns){
        for(let head in props.linkColumns){
          headings.push(props.linkColumns[head].head);
        }
      }
      return (
        <table className="table-bordered">
          <tbody>
          {props.heading === "yes" ?
            <tr>
              {headings.map((heading, index) => <td className="text-center" key={index}>{heading}</td>)}
            </tr> : null
          }
          {state.data.map((obj,ind) =>
              <tr key={ind}>
                {headings.map((head,i) =>
                    obj[head] === "[GREEN]" || obj[head] === "[RED]" || obj[head] === "[YELLOW]" ?
                      this.statusImage(obj[head],i) :
                      <td key={i} className={td_class} >{obj[head]}</td>
                )}
              </tr>
          )}
          </tbody>
        </table>
      );
    }
  }

}
