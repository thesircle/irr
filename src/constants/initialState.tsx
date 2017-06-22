import {DomainTrackerBaseModel} from "../components/company/domainTracker/Models/DomainTrackerBaseModel";
interface State{
  kaseya:Kaseya;
  kaseyaFetching:boolean;
  kaseyaTransmitting:boolean;
  wiseMessages:object[];
  companyDomainTracker:DomainTrackerBaseModel;
}
interface Kaseya{
  url:string;
  userName:string;
  password:string;
}
export const state:State = {
  kaseya:{
    url:"",
    userName :"",
    password  :""
  },
  kaseyaFetching:false,
  kaseyaTransmitting:false,
  wiseMessages:[],
  companyDomainTracker: new DomainTrackerBaseModel()
};
