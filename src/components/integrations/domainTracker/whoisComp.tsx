import {Component} from "react";
import {lang as L} from "../../../constants/lang";
import {TabContentComp} from "./tabContentComp";
import {TabsWraperComp} from "./tabsWraperComp";

export class WhoisComp extends Component<any,any>{
  constructor(props){
    super(props);
    this.state = {
      header_whois:"",
      days_to_expire: ""
    };
    this.setWhoisHeaderState = this.setWhoisHeaderState.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.props = nextProps;
    nextProps.data.data && nextProps.data.data.registrar ?
      this.setWhoisHeaderState(new Date(nextProps.data.data.registrar["Expiration Date"])): null;
  }

  setWhoisHeaderState(expiration_Date){
    let current_Date=new Date();
    let days = Math.round((expiration_Date-(current_Date as any))/(1000*60*60*24));
    this.setState({days_to_expire : days});
    if(current_Date > expiration_Date)
    {
      this.setState({header_whois:L.DOAMINTRACKER.HEADERS.DANGER});
    }
    else
    {
      current_Date.setMonth(current_Date.getMonth() + 3);
      current_Date <= expiration_Date ?
        this.setState({header_whois:L.DOAMINTRACKER.HEADERS.SUCCESS}) :
        this.setState({header_whois:L.DOAMINTRACKER.HEADERS.SUCCESS});
    }
  }


  render(){
    let props=this.props as any;
    let state = this.state as any;
    return(
      <div>
      <div className={state.header_whois}>
        <span className="fs-20">
          WHOIS: {props.data.data && props.data.data.registrar["Domain Name"] as any ?
          props.data.data.registrar["Domain Name"].toUpperCase() as any : ""}</span>
        <div className="pull-right"><span>Domain will expire in {state.days_to_expire} days</span>
          <img src="/img/icon_circle_success_white.svg" width="24px" height="24px"/></div>
      </div>
        <div className="col-md-5 col-sm-5 no-padding">
        < TabContentComp
          data={props.data.data ? props.data.data.registrar : {}}
          loader={props.data.fetching} />
        </div>
        <TabsWraperComp
          data={props.data.data ? props.data.data.contact : {}}
          loader={props.data.fetching} />
        <div className="col-md-12 col-sm-12 col-xs-12 table-footer"><span>
      Reported by</span> <span> {props.data.data ?  props.data.data.registrar["Whois Server"] : ""}</span>
          <span>    on    {new Date().toLocaleDateString()} at</span> <span>{new Date().toLocaleTimeString()} (UTC-5)</span>
        </div>
      </div>

    );
  }
}