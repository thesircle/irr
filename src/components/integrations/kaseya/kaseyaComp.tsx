import './../../../styles/main.scss'

var isUpdateMode = (props) => {
  return(// to be changed soon
    props.match.path.endsWith('/update')
    || props.match.path.endsWith('/create')
  )
}

export const KaseyaComp = (props ) => {
  let _url, _companyId, _userName, _password
  var update = (e) => {
    e.preventDefault();
    props.onUpdateKaseya({
      url: _url.value,
      companyId: _companyId.value,
      userName: _userName.value,
      password: _password.value
    })
  }

  return(
  <div>
    {/*<div className="myClass">This is user ID page... your id: {props.match.params.id} </div>*/}
    <div className="container">
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>

            </div>
            <div className="modal-body">
              <img className="img-responsive" src="/img/cw_setup_large_1.jpg" />
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid container-fixed-lg container-margin">
      <div className="container-fixed-lg bg-white widgetborder">
        <div className="col-lg-12 col-md-12 col-xs-12">
          <ul className="breadcrumb role_list_breadcrumb p-t-0 p-r-0">
            <li>
              <a ui-sref="app.dashboard" href="#/app/dashboard">Dashboard</a>
            </li>&nbsp;
            <li> <a ui-sref="app.updateglobalpreferences" href="#/app/updateglobalpreferences">Organization Settings</a>
            </li>&nbsp;
            <li> <a href="" className="active">Integration Management</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-7 col-sm-7 col-xs-7 col-lg-7">

            <h5 className="companyheader m-l-10  m-t-5 m-b-5">
              Integration Management </h5>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-lg-1 col-md-1 hidden-sm hidden-xs">
            <div>&nbsp;</div>
            <img className="img-responsive" src="/img/instruction.png" />
          </div>
          <div className="col-lg-11 col-xs-11">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="row">
              <div className="col-lg-6 col-xs-12 img-display">
                <div className="widget-item f-w col-lg-4 hidden-xs">
                  <img src="/img/cw_setup_1.png" />
                    <div
                         className="overlayer widget-detail hover_img  bottom-left full-width">
                      <img src="/img/hover_image.png" className="wm-logo" data-toggle="modal" data-target="#myModal" />
                    </div>
                </div>

                <div className="col-lg-6 col-xs-12">
                  <div>&nbsp;</div>
                  <ul>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">1</span> Login to
                      <strong> ConnectWise Client</strong>.
                    </li>
                    <div className="line-height">&nbsp;</div>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">2</span> Click on
                      <strong> System</strong> on the navigation menu of
                      ConnectWise.
                    </li>
                    <div className="line-height">&nbsp;</div>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">3</span> Click on
                      <strong> Setup Tables</strong>.
                    </li>
                    <div className="line-height">&nbsp;</div>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">4</span> On the
                      search bar for Table, type <strong>"Integrator"</strong> and
                      press enter.
                    </li>
                    <div className="line-height">&nbsp;</div>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">5</span> Select
                      <strong> Integrator Login</strong> from the results.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-xs-12 img-display">
                <div className="widget-item  f-w col-lg-4 hidden-xs">
                  <img className="img-responsive" src="/img/cw_setup_2.png" />
                    <div
                         className="overlayer widget-detail hover_img  bottom-left full-width">
                      <img src="/img/hover_image.png" className="wm-logo" data-toggle="modal" data-target="#myModal" />
                    </div>
                </div>

                <div className="col-lg-6 col-xs-12">
                  <div>&nbsp;</div>
                  <ul>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">7</span> Create a
                      new account by entering a Username and Password. (Make sure
                      that there is a CW member with <strong> Admin rights </strong>
                       already available with the same username).
                    </li>
                    <div className="line-height">&nbsp;</div>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">8</span> Change the
                      <strong> Access Level </strong> to <strong> All
                        Records</strong> from the dropdown.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>&nbsp;</div>
            <div className="row">
              <div className="col-lg-6 col-xs-12 img-display">
                <div className="widget-item  f-w col-lg-4 hidden-xs">
                  <img className="img-responsive" src="/img/cw_setup_3.png" />
                    <div
                         className="overlayer widget-detail hover_img  bottom-left full-width">
                      <img src="/img/hover_image.png" className="wm-logo" data-toggle="modal" data-target="#myModal" />
                    </div>
                </div>

                <div className="col-lg-6 col-xs-12">
                  <div>&nbsp;</div>
                  <ul>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">6</span> Click on
                      <strong> "+" </strong> sign to add a new integrator Login.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-xs-12 img-display">

                <div className="widget-item  f-w col-lg-4 hidden-xs">
                  <img className="img-responsive" src="/img/cw_setup_4.png" />
                    <div
                         className="overlayer widget-detail hover_img  bottom-left full-width">
                      <img src="/img/hover_image.png" className="wm-logo" data-toggle="modal" data-target="#myModal" />
                    </div>
                </div>
                <div className="col-lg-6 col-xs-12">
                  <div>&nbsp;</div>
                  <ul>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">9</span> Enable the
                      following API(s).
                      <div className="line-height">&nbsp;</div>
                      <div className="row">
                        <div className="col-lg-6">
                          <ul className="dashed padding-0">
                            <li> Service Ticket (Select the Appropriate
                              Service Board)
                            </li>
                            <li> Contact</li>
                            <li> Company</li>
                            <li> Member</li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-xs-6">
                          <ul className="dashed p-t-0 p-l-20">
                            <li> System</li>
                            <li> Configuration</li>
                            <li> Agreement</li>
                            <li> Document</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <div className="line-height">&nbsp;</div>
                    <li className="list-style"><span
                      className="badge bg-complete text-white">10</span> Click
                      <strong> Save</strong> and <strong> Close</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
        <hr className="hr-integration" />

          <div className="row form-background">

            <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0 ">
                  <div className="form-group form-group-default" pg-form-group="">
                    <label className="label-style">Server
                      URL</label>
                    <input type="text" required={true} name="serverName" className="form-control" placeholder="Enter your CW FQDN. E.g. https://api-na.myconnectwise.net" />
                  </div>
                  <label htmlFor="serverName" className="error">This field is
                    required.</label>
                </div>
              </div>


              <div className="row clearfix">
                <div>&nbsp;</div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0 ">
                  <div className="form-group form-group-default" pg-form-group="">
                    <label className="label-style">Company
                      ID</label>
                    <input type="text" required={true} name="CompID"  className="form-control" placeholder="CW Company ID" />
                  </div>
                  <label htmlFor="CompID" className="error">This field is
                    required.</label>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0 ">
                  <div className="form-group form-group-default" pg-form-group="">
                    <label className="label-style">Username</label>
                    <input type="text" required={true} name="username" className="form-control" placeholder="CW Integrator Login" />
                  </div>
                  <label htmlFor="username" className="error">This field is
                    required.</label>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0 ">
                  <div className="form-group form-group-default" pg-form-group="">
                    <label className="label-style">Password</label>
                    <input type="password" required={true} name="password" className="form-control" placeholder="CW Integrator Password" />
                  </div>
                  <label htmlFor="password" className="error ">This field is
                    required.</label>
                </div>
              </div>

              {/*<div className="row clearfix">*/}
                {/*<div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0 ">*/}
                  {/*<div role="alert" className="alert alr" id="lblFailed" style={{"display":"none; ","background-color":"#FDDDDD","color":"#A43432;"}}>*/}
                    {/*<button className="close"></button>*/}
                    {/*<strong>Invalid Credentials</strong>*/}
                  {/*</div>*/}
                {/*</div>*/}
              {/*</div>*/}

            </div>
            <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 m-t-20">
              <img className="img-responsive float-right" src="/img/syncconnectwise.png" />
            </div>

          </div>
      </div>
    </div>

    <br />
    <br />
    <hr />
    <hr />
    <br />
    <br />

    <form method="POST">
      <input
        ref={input => _url = input}
        type="text"
        name="url"
        readOnly={!isUpdateMode(props)}
        className ="form-control"
        placeholder="Enter your CW FQDN. E.g. https://api-na.myconnectwise.net"
      />
      <input
        ref={input => _companyId = input}
        type="text"
        name="companyId"
        readOnly={!isUpdateMode(props)}
      />
      <input
        ref={input => _userName = input}
        type="text"
        name="userName"
        readOnly={!isUpdateMode(props)}
      />
      <input
        ref={input => _password = input}
        type="password"
        name="password"
        readOnly={!isUpdateMode(props)}
      />
      Update: <button name="update" value="Update" onClick={update}/>
    </form>






  </div>
  )
}

  