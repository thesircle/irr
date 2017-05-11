export const IntegrationInfoComp = (prop) => {

    // var modifyString = (stringValue) => {
    //     var bolded = [ "ConnectWise Client" , "System" , "Setup Tables" , '/"Integrator"/' , "Integrator Login" ,
    //         '/"+"/' ,"Admin rights" ,"Access Level" , "All Records" , "Save" , "Close" ]
    //     for(var b in bolded){
    //         if(stringValue.indexOf(bolded[b]) > 0){
    //             debugger
    //         }
    //     }
    //     // var re = new RegExp(find, 'g');
    //     // return str.replace(re, '<b>'+find+'</b>');
    // }

  return(
      <div className="col-lg-6 col-xs-12 img-display">
        <div className="widget-item f-w col-lg-4 hidden-xs">
          <img src={prop.object.sm_img} />
          <div
              className="overlayer widget-detail hover_img  bottom-left full-width">
            <img src={prop.object.sm_hover_img} className="wm-logo" data-toggle="modal" data-target="#myModal" />
          </div>
        </div>

        <div className="col-lg-6 col-xs-12">
          <div>&nbsp;</div>
          <ul>
            {prop.object.props.map((obj,index) => <div key={index}>
              <li className="list-style" ><span
                  className="badge bg-complete text-white" >{obj.key}</span>&nbsp;
                  {typeof obj.value == "string" ?
                    <span dangerouslySetInnerHTML={{__html:obj.value}}></span> :
                      (<span>{obj.value.head}<ul className="subList">
                          {obj.value.detail_List.map((subValue,i) => <li key={i}>{subValue}</li>)}
                      </ul></span>)}
              </li>
              <div className="line-height">&nbsp;</div>
            </div>)}
          </ul>
        </div>
      </div>
  )
}
