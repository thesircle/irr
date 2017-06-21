class DomainTrackerBaseDataModel {
  fetching: boolean = true;
  data:object = {};
}

export class DomainTrackerBaseModel {
  whois:DomainTrackerBaseDataModel;
  aName: DomainTrackerBaseDataModel;
  ptr: DomainTrackerBaseDataModel;
  dns:DomainTrackerBaseDataModel;

  constructor(){
    //Whois Model object
    this.whois = new DomainTrackerBaseDataModel();
    this.whois.data = {
      registrar:{},
      contact:{
        registrant:{},
        admin:{},
        technical:{}
      }
    };

    //ANAME Model object
    this.aName = new DomainTrackerBaseDataModel();

    //PTR Model object
    this.ptr = new DomainTrackerBaseDataModel();

    //DNS Model object
    this.dns = new DomainTrackerBaseDataModel();
    this.dns.data = {
      dns:[],
      result:[]
    };
  }
}