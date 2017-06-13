import {Component} from "react";
import {lang as L} from "../../../constants/lang";

export class TabComp extends Component<any,any>{
  constructor(props){
    super(props);
    this.setHeading = this.setHeading.bind(this);
  }

  setHeading(headingString){
    let head = headingString.replace("_"," ");
    head = head.charAt(0).toUpperCase() + head.slice(1);
    return head;
  }

  render(){

    let props = this.props as any;
    if(props.loader){
      return (<div className="text-center"><img src={L.INTEGRATIOSN.DOAMINTRACKER.LOADER} className="imgLoader"/></div>);
    }
    let headings = Object.keys(props.data);
    return (
            <table className="table">
                <tbody>
                {headings.map((head,index) =>
                    <tr key={index}>
                        <td>{this.setHeading(head)}</td>
                        <td>{props.data[head]}</td>
                    </tr>)}
                </tbody>
            </table>
    );
  }
}