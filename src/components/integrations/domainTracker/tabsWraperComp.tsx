import {Component} from "react";
import {LoaderCog} from "../../UtilComp/loaderCog";
import {TabContentComp} from "./tabContentComp";
export class TabsWraperComp extends Component<any,any>{
  constructor(props){
    super(props);
    this.state={
      contact:[]
    };
  }


  render(){
    let props=this.props as any;
    return(
    <div className="col-md-7 col-sm-7 whois-tab-info no-padding">
      <ul className="nav nav-pills">
        <li className="active"><a data-toggle="pill" href=".whois-tab1">REGISTRANT INFO</a></li>
        <li><a data-toggle="pill" href=".whois-tab2">ADMIN INFO</a></li>
        <li><a data-toggle="pill" href=".whois-tab3">TECH INFO</a></li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade in active whois-tab1">
            <TabContentComp data={props.data.registrant || {}} loader={props.loader}  />
        </div>
        <div className="tab-pane fade whois-tab2">
            <TabContentComp data={props.data.admin || {}} loader={props.loader} />
        </div>
        <div className="tab-pane fade whois-tab3">
            <TabContentComp data={props.data.technical || {}}  loader={props.loader} />
        </div>
      </div>
    </div>
    );
  }

}