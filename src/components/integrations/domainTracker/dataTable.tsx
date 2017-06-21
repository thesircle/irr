import {Component} from 'react'
import {PropTypes} from 'prop-types';
import L from '../../../constants/lang';

export class DataTable extends Component<any,any> {
constructor(props)
{
    super(props);
    this.state = {
        Data:{}
                }
}
    componentWillReceiveProps(nextProps)
    {
        this.setState({Data:nextProps.data as any});
    }

    render(){
        function isEmpty(obj) {
            for (var x in obj) { return false; }
            return true;
        }
        let state=this.state as any
            if(isEmpty( state.Data)) {
                return (<img src={L.INTEGRATIOSN.DOAMINTRACKER.LOADER}/>);
              }
            else
            {
                let Headings = Object.keys(state.Data[0]);
                return (
                    <table className="table table-bordered domain-tracker-table result-table">
                        <tbody>
                        <tr>
                            {Headings.map((heading,index) => <th key={index}>{heading}</th>)}
                        </tr>
                        {state.Data.map((obj,ind)=>
                            <tr key={ind}>{Headings.map((head,i)=>
                                obj[head] != "[GREEN]" ? <td key={i}>{obj[head]}</td> : <td className="text-center" key={i}><i className="fa fa-check-circle fa-2x"></i></td>)}</tr>
                        )}
                        </tbody>
                    </table>
                );
            }
    }

}
// export const DataTable = () =>{
//
//     return(<div>this is datatable</div> )
// }
