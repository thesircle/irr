import {Component} from 'react'
import {PropTypes} from 'prop-types';
import './../../../styles/main.scss'
import {IntegrationInfoComp} from '../integrationInfoComp';
import L from '../../../constants/lang'
import {FormFieldBaseComp} from "../../common/formComp/formFieldBaseComp";
import {KaseyaFormModel} from "./KaseyaFormModel";
import {validateField} from "../../common/validations/validateFormFields";

export class KaseyaComp extends Component<{},{}> {

  constructor(props) {
    super(props);
    this.state = {
                  kaseyaFetching:false,
                  kaseyaTransmitting: false,
                  KaseyaFormModel: new KaseyaFormModel(),
                  disableForm: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange ( e ){
    let state = this.state as any
    const target = e.target;
    const inputValue = e.target.value;
    const fieldName = e.target.name;
    // this.setState({
    //   [name]: value
    // });

    console.log("state------: "+JSON.stringify(state))
    // state.KaseyaFormModel[fieldObjectName].value = inputValue //{M.A}: TODO: bad approach
    this.setState(
      { KaseyaFormModel:
        { ...state.KaseyaFormModel, [fieldName]
          :
          { ...state.KaseyaFormModel[fieldName], value: inputValue }
        }
      }
    )

    var disableForm = false;
    // //TODO: {M.A}: has bug, type last char and backspace, see submit button
    // for ( let field  in state.KaseyaFormModel){
    //   // if (Object.hasOwnProperty(field)) {
    //     if(!validateField(state.KaseyaFormModel[field]).result){
    //       disableForm = true;
    //       break;// break if even on field failed check
    //     }
    //   // }
    // }

    // //TODO: {M.A}: has bug, type last char and backspace, see submit button
    Object.keys(state.KaseyaFormModel).forEach(function (key) {
      let field = state.KaseyaFormModel[key];
      if(!validateField(field).result){
        disableForm = true;
        return;// break if even on field failed check
      }
    });
    this.setState({disableForm: disableForm})
  }

  handleSubmit(e) {
    let state = this.state as any;
    e.preventDefault();
    (this.props as any).onUpdateKaseya
    ({
      url: state.KaseyaFormModel.url.value,
      userName: state.KaseyaFormModel.userName.value,
      password: state.KaseyaFormModel.password.value
    })
  }

  changeRouteState(e){
    parent.postMessage({
      name:"route",
      route: e.target.innerText
    },'*')
  }

  //TODO: {M.A}: set state of url, userName, pass etc in KaseyaForm model object
  componentWillReceiveProps(nextProps){
    let state:any = this.state
    this.setState({ KaseyaFormModel:
                     { ...state.KaseyaFormModel, url:
                       { ...state.KaseyaFormModel.url, value: nextProps.url }
                     }
                 })

    this.setState({ KaseyaFormModel:
                     { ...state.KaseyaFormModel, userName:
                       { ...state.KaseyaFormModel.userName, value: nextProps.userName }
                     }
                 })

    this.setState({ KaseyaFormModel:
                     { ...state.KaseyaFormModel, password:
                       { ...state.KaseyaFormModel.password, value: nextProps.password }
                     }
                 })


    this.setState({kaseyaFetching: nextProps.kaseyaFetching})
    this.setState({kaseyaTransmitting: nextProps.kaseyaTransmitting})

  }
  componentDidMount(){
    (this.props as any).onViewKaseya();
  }

  render(){
    let state = this.state as any
    let e:any;
    return(
      <div>
        {(state.kaseyaFetching)? "fetching": "not fetching" }
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
                      model = {state.KaseyaFormModel.url}
                      className="col-lg-6 col-md-6 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0"
                      value={state.KaseyaFormModel.url.value}
                      onChange={(e) => this.handleChange(e) }
                  />
                </div>

                <div className="row clearfix">
                  <div>&nbsp;</div>

                  <FormFieldBaseComp
                    model = {state.KaseyaFormModel.userName}
                    value={state.KaseyaFormModel.userName.value}
                    onChange={(e) => this.handleChange(e) } />

                  <FormFieldBaseComp
                    model = {state.KaseyaFormModel.password}
                    value={state.KaseyaFormModel.password.value}
                    onChange={(e) => this.handleChange(e)} />
                  <button onSubmit={this.handleSubmit} disabled={state.disableForm}>Update</button>
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

