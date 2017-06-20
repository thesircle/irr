import {DomainTrackerBaseModel} from "../components/company/domainTracker/Models/DomainTrackerBaseModel";
export const state = {
  kaseya:{
    url:"",
    userName :"",
    password  :""
  },
  kaseyaFetching:false,
  kaseyaTransmitting:false,
  wiseMessages:[],
  domainTracker: new DomainTrackerBaseModel()
};
