import {Component} from "react";
import {TabContentComp} from "./tabContentComp";
export class TabsWraperComp extends Component<any,any>{
  constructor(props){
    super(props);
  }


  render(){
    let props=this.props as any;
    return(
    <div className="col-md-7 col-sm-7 whois-tab-info no-padding">
      <ul className="nav nav-pills">
        <li className="active"><a data-toggle="pill" href=".tab1">REGISTRANT INFO</a></li>
        <li><a data-toggle="pill" href=".tab2">ADMIN INFO</a></li>
        <li><a data-toggle="pill" href=".tab3">TECH INFO</a></li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane fade in active tab1">
            <TabContentComp data={props.data.registrant || {}} loader={props.loader}  />
        </div>
        <div className="tab-pane fade tab2">
            <TabContentComp data={props.data.admin || {}} loader={props.loader} />
        </div>
        <div className="tab-pane fade tab3">
            <TabContentComp data={props.data.technical || {}}  loader={props.loader} />
        </div>
      </div>
    </div>
    );
  }

}