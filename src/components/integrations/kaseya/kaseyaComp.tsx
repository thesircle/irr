import {Component} from 'react'
import {PropTypes} from 'prop-types';
import './../../../styles/main.scss'
import {IntegrationInfoComp} from '../integrationInfoComp';
import L from '../../../constants/lang'
import {FormField} from "../../common/formFieldComponent";
import {KaseyaForm} from "./KaseyaFormModel";

export class KaseyaComp extends Component<{},{}> {


  constructor(props) {
    super(props);
    this.state = {url: '', userName: '', password: '', isSubmitted:false, isValid:false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.validator = this.validator.bind(this);
  }

  handleChange(e){
    const target = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  // validator(value){
  //   this.setState({isValid:value});
  // }

  handleSubmit(e) {
    let state = this.state as any;
    if(state.url === "" || state.userName === "" || state.password === "") {
      this.setState({isSubmitted: true});
      return
    }
    e.preventDefault();
    // if (!url || name || password ||){
    (this.props as any).onUpdateKaseya
    ({
      url: state.url,
      userName: state.userName,
      password: state.password
    })
  }

  changeRouteState(e){
    parent.postMessage({
      name:"route",
      route: e.target.innerText
    },'*')
  }

  componentWillReceiveProps(nextProps){
    this.setState({url: nextProps.url})
    this.setState({userName: nextProps.userName})
    this.setState({password: nextProps.password})

  }
  componentDidMount(){
    console.log(this.refs["infoForm"]);
    (this.props as any).onViewKaseya();
  }

  render(){
    let state = this.state as any
    return(
      <div>
        <div className="container-fluid container-fixed-lg m-t-30">
          <div className="container-fixed-lg bg-white widgetborder">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <ul className="breadcrumb role_list_breadcrumb p-t-0 p-r-0">
                <li onClick={this.changeRouteState}>
                  <a href="">Dashboard</a>
                </li>&nbsp;
                <li onClick={this.changeRouteState}> <a href="">Organization Settings</a>
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
                <form ref="infoForm">
                <div className="row clearfix">
                  <FormField
                      object = {new KaseyaForm().url}
                      isSubmitted = {state.isSubmitted}
                      className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                      value={state.url}
                      onChange={this.handleChange} />
                </div>

                <div className="row clearfix">
                  <div>&nbsp;</div>

                  <FormField
                    object = {new KaseyaForm().email}
                    isSubmitted = {state.isSubmitted}
                    value={state.userName}
                    placeholder="CW Integrator Login"
                    _onChange={this.handleChange} />


                  <FormField
                    object = {new KaseyaForm().password}
                    isSubmitted = {state.isSubmitted}
                    value={state.password}
                    placeholder="Enter Password"
                    _onChange={this.handleChange} />
                  <button onSubmit={this.handleSubmit} >Update</button>
                </div>
                </form>

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

