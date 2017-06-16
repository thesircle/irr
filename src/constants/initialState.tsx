export const state = {
  kaseya:{
    url:"",
    userName :"",
    password  :""
  },
  kaseyaFetching:false,
  kaseyaTransmitting:false,
  wiseMessages:[],
  domainTracker:[{
    WhoisOBJ:{
      fetching:true,
      data:{
        registrar:{},
        contact:{}
      }
    },
    AOBJ:{
      fetching:true,
      data:{
        information:{}
      }
    }
  }]
};
