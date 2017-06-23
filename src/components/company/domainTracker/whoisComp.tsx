import {Component} from "react";
import {TabContentComp} from "./tabContentComp";
import {TabsWraperComp} from "./tabsWraperComp";
import {lang as L} from "../../../constants/lang";

interface State{
  whoisHeader:WhoisHeader;
}
interface WhoisHeader{
  className:string;
  icon:string;
  daysToExpire:number;
}
interface Props{
  data:Data;
}
interface Data{
  data:Dataa;
  fetching:{};
}
interface Dataa{
  registrar:Registrar;
  contact:{};
}
interface Registrar{
  [key:string]:string;
}
export class WhoisComp extends Component<Props,State>{
  constructor(){
    super();
    this.state = {
      whoisHeader:{
        className:"",
        icon:"",
        daysToExpire: 0
      }
    };
    this.setWhoisHeaderState = this.setWhoisHeaderState.bind(this);
    this.updateFieldInState = this.updateFieldInState.bind(this);
  }

  updateFieldInState(field:string, value:string){
    this.setState((state) => ({
      whoisHeader: { ...state.whoisHeader,
        [field]: value
      }
    }));
  }

  componentWillReceiveProps(nextProps:Props){
    this.props = nextProps;
    nextProps.data.data && nextProps.data.data.registrar ?
      this.setWhoisHeaderState(new Date(nextProps.data.data.registrar["Expiration Date"])): null;
  }

  setWhoisHeaderState(expiration_Date:any){
    let current_Date=new Date();
    let days = Math.round((expiration_Date-(current_Date.getTime())/(1000*60*60*24)));
    this.updateFieldInState("daysToExpire",days.toString());
    if(current_Date > expiration_Date)
    {
      this.updateFieldInState("className",L.COMPANY.DOAMINTRACKER.HEADERS.CLASS.DANGER);
      this.updateFieldInState("icon",L.COMPANY.DOAMINTRACKER.ICONS.DANGER);
    }
    else
    {
      current_Date.setMonth(current_Date.getMonth() + 3);
      if(current_Date <= expiration_Date){
        this.updateFieldInState("className",L.COMPANY.DOAMINTRACKER.HEADERS.CLASS.SUCCESS);
        this.updateFieldInState("icon",L.COMPANY.DOAMINTRACKER.ICONS.SUCCESS_WHITE);
      }
      else{
        this.updateFieldInState("className",L.COMPANY.DOAMINTRACKER.HEADERS.CLASS.WARNING);
        this.updateFieldInState("icon",L.COMPANY.DOAMINTRACKER.ICONS.WARNING);
      }
    }
  }


  render(){
    let props=this.props;
    let state = this.state;
    return(
      <div>
      <div className={state.whoisHeader.className}>
        <span className="fs-20">
          WHOIS: {props.data.data && props.data.data.registrar["Domain Name"]  ?
          props.data.data.registrar["Domain Name"].toUpperCase()  : ""}</span>
        {state.whoisHeader.daysToExpire >= 0 ?
          <div className="pull-right"><span>Domain will expire in {state.whoisHeader.daysToExpire} days </span>
            <img src={state.whoisHeader.icon} width="24px" height="24px"/></div> :
          <div className="pull-right"><span>Domain is expired </span>
            <img src={state.whoisHeader.icon} width="24px" height="24px"/></div>
        }
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