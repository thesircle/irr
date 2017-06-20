import {Component} from "react";
import {LoaderCog} from "../../UtilComp/loaderCog";

export class TabContentComp extends Component<any,any>{
  constructor(props){
    super(props);
  }


  render(){
    let props = this.props as any;
    let headings = Object.keys(props.data);
    return (
      props.loader ?
        <LoaderCog /> :
            <table className="table">
                <tbody>
                {headings.map((head,index) =>
                    <tr key={index}>
                        <td>{head}</td>
                        <td>{props.data[head]}</td>
                    </tr>)}
                </tbody>
            </table>
    );
  }
}