import {Component} from 'react'
import {PropTypes} from 'prop-types';
import './../../../styles/main.scss'
import {IntegrationInfoComp} from '../integrationInfoComp';
import L from '../../../constants/lang'
import {FormFieldBaseComp} from "../../common/FormFieldBaseComp";
import {KaseyaFormModel} from "./KaseyaFormModel";

export class KaseyaComp extends Component<{},{}> {
  KaseyaFormModel: any;
  constructor(props) {
    super(props);
    this.state = {url: '', userName: '', password: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.KaseyaFormModel = new KaseyaFormModel()
  }

  handleChange(e){
    const target = e.target;
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    let state = this.state as any;
    e.preventDefault();
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
                <form ref="kaseyaForm" noValidate >
                <div className="row clearfix">
                  <FormFieldBaseComp
                      object = {this.KaseyaFormModel.url}
                      className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0"
                      value={state.url}
                      events={{onChange:this.handleChange}}
                  />
                </div>

                <div className="row clearfix">
                  <div>&nbsp;</div>

                  <FormFieldBaseComp
                    object = {this.KaseyaFormModel.email}
                    value={state.userName}
                    events={{onChange:this.handleChange}} />

                  <FormFieldBaseComp
                    object = {this.KaseyaFormModel.password}
                    value={state.password}
                    events={{onChange:this.handleChange}} />
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
      </div>
    )
  }
}

