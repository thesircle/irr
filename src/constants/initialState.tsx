import {DomainTrackerBaseModel} from "../components/company/domainTracker/Models/DomainTrackerBaseModel";
interface IState{
  kaseya:IKaseya;
  kaseyaFetching:boolean;
  kaseyaTransmitting:boolean;
  wiseMessages:object[];
  //companyDomainTracker:DomainTrackerBaseModel;
}
interface IKaseya{
  url:string;
  userName:string;
  password:string;
}
export const state:IState = {
  kaseya:{
    url:"",
    userName :"",
    password  :""
  },
  kaseyaFetching:false, //TODO: {M.A} thinking to put Kaseya in one object with fetching and trasmitting
  kaseyaTransmitting:false,
  wiseMessages:[]
  //,
  //companyDomainTracker: new DomainTrackerBaseModel()
};
