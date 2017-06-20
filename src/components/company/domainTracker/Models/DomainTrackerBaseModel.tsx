class WHOIS {
  fetching:boolean = true;
  data:object = {
    registrar: {},
    contact:{
      registrant:{},
      admin:{},
      technical:{}
    }
  };
}

class ANAME {
  fetching:boolean = true;
  data:object = {};
}

class PTR {
  fetching:boolean = true;
  data:object = {};
}

class DNS {
  fetching:boolean = true;
  data:object = {
    dns : [],
    result:[]
  };
}

export class DomainTrackerBaseModel {
  whois:WHOIS;
  aName: ANAME;
  ptr: PTR;
  dns:DNS;
  constructor(){
    this.whois = new WHOIS();
    this.aName = new ANAME();
  }
}