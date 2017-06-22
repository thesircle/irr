import {Component} from "react";
import {LoaderCog} from "../../UtilComp/loaderCog";
interface Props{
  data:{};
  loader:{};
}
export class TabContentComp extends Component<Props,{}>{
  constructor(props){
    super(props);
  }


  render(){
    let props = this.props;
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