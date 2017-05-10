export const IntegrationInfoComp = (prop) => {

    var modifyString = (stringValue) => {
        var bolded = [ "ConnectWise Client" , "System" , "Setup Tables" , '/"Integrator"/' , "Integrator Login" ,
            '/"+"/' ,"Admin rights" ,"Access Level" , "All Records" , "Save" , "Close" ]
    }

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
            {prop.object.props.map((obj,index) => <div>
              <li className="list-style"><span
                  className="badge bg-complete text-white" key={index.toString()}>{obj.key.toString()}</span>&nbsp;
                  {typeof obj.value == "string" ?
                      obj.value :
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
