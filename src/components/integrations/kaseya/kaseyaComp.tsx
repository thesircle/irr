import {Component} from 'react'
import './../../../styles/main.scss'
import {IntegrationInfoComp} from '../integrationInfoComp';
import L from '../../../constants/lang'
import formValidationUtils from '../../../utils/formValidationutils'
import {FormField} from "../../common/formFieldComponent";


export class KaseyaComp extends Component<{},{}> {

  // let _url, _companyId, _userName, _password;
  // var update = (e) => {
  //   e.preventDefault();
  //   props.onUpdateKaseya({
  //     url: _url.value,
  //     companyId: _companyId.value,
  //     userName: _userName.value,
  //     password: _password.value
  //   })
  // }

  constructor(props) {
    super(props);
    this.state = {url: '', userName: '', password: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
    formValidationUtils(name,value)
  }

  handleSubmit(e) {
    console.log(`handleSubmit`)
    let state = this.state as any
    e.preventDefault();
    (this.props as any).onUpdateKaseya
    ({
      url: state.url,
      userName: state.userName,
      password: state.password
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({url: nextProps.url})
    this.setState({userName: nextProps.userName})
    this.setState({password: nextProps.password})

  }
  componentDidMount(){
    (this.props as any).onViewKaseya();
  }

  render(){
    let state = this.state as any
    return(
      <div>
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
                  <a>Dashboard</a>
                </li>&nbsp;
                <li> <a>Organization Settings</a>
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
                  <IntegrationInfoComp object={L.INTEGRATIOSN.KASEYA.TUT_1}/>

                  <IntegrationInfoComp object={L.INTEGRATIOSN.KASEYA.TUT_3}/>
                </div>

                <div>&nbsp;</div>
                <div className="row">
                  <IntegrationInfoComp object={L.INTEGRATIOSN.KASEYA.TUT_2}/>

                  <IntegrationInfoComp object={L.INTEGRATIOSN.KASEYA.TUT_4}/>
                </div>

              </div>
            </div>
            <hr className="hr-integration" />

            <div className="row form-background">
              <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="row clearfix">
                  <FormField
                    type="url"
                    name="url"
                    fieldName="Server Url"
                    className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                    placeholder="Enter your CW FQDN. E.g. https://api-na.myconnectwise.net"
                    value={state.url}
                    _onChange={this.handleChange} />
                </div>

                <div className="row clearfix">
                  <div>&nbsp;</div>

                  <FormField
                    type="email"
                    name="userName"
                    fieldName="User Name"
                    value={state.userName}
                    placeholder="CW Integrator Login"
                    _onChange={this.handleChange} />

                  <FormField
                    type="password"
                    name="password"
                    fieldName="Password"
                    value={state.password}
                    placeholder="Enter Password"
                    _onChange={this.handleChange} />
                  <button onClick={this.handleSubmit} >Update</button>
                </div>

                <div className="row clearfix">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0 ">
                <div role="alert" className="alert alr" id="lblFailed" style={{"display":"none","backgroundColor":"#FDDDDD","color":"#A43432"}}>
                <button className="close"></button>
                <strong>Invalid Credentials</strong>
                </div>
                </div>
                </div>

              </div>
              <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 m-t-20">
                <img className="img-responsive float-right" src="/img/syncconnectwise.png" />
              </div>

            </div>
          </div>
        </div>

        {/*<form method="POST">*/}
          {/*<input*/}
            {/*ref={input => _url = input}*/}
            {/*type="text"*/}
            {/*name="url"*/}
            {/*readOnly={!isUpdateMode(props)}*/}
            {/*className ="form-control"*/}
            {/*placeholder="Enter your CW FQDN. E.g. https://api-na.myconnectwise.net"*/}
          {/*/>*/}
          {/*<input*/}
            {/*ref={input => _companyId = input}*/}
            {/*type="text"*/}
            {/*name="companyId"*/}
            {/*readOnly={!isUpdateMode(props)}*/}
          {/*/>*/}
          {/*<input*/}
            {/*ref={input => _userName = input}*/}
            {/*type="text"*/}
            {/*name="userName"*/}
            {/*readOnly={!isUpdateMode(props)}*/}
          {/*/>*/}
          {/*<input*/}
            {/*ref={input => _password = input}*/}
            {/*type="password"*/}
            {/*name="password"*/}
            {/*readOnly={!isUpdateMode(props)}*/}
          {/*/>*/}
          {/*Update: <button name="update" value="Update" onClick={update}/>*/}
        {/*</form>*/}

      </div>
    )
  }
}


  