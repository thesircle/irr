import "./../../../styles/main.scss";
import {ChangeEvent, Component, EventHandler, FormEvent} from "react";
import {FormFieldBaseComp} from "../../common/formComp/formFieldBaseComp";
import {FormFieldEmailBaseModel} from "../../common/formModel/FormFieldEmailModel";
import {KaseyaFormModel} from "./KaseyaFormModel";
import {integrationInfoComp as IntegrationInfoComp} from "../integrationInfoComp";
import {lang as L} from "../../../constants/lang";
import {validateField} from "../../common/validations/validateFormFields";

interface State{
  kaseyaFetching:boolean;
  kaseyaTransmitting:boolean;
  KaseyaFormModel:KaseyaFormModel;
  disableForm:boolean;
}
interface Props{
  onUpdateKaseya:Function;
  onViewKaseya:Function;
  url:string;
  userName:string;
  password:string;
  kaseyaFetching:boolean;
  kaseyaTransmitting:boolean;
}
export class KaseyaComp extends Component<any,State> {
  constructor() {//TODO:resolve issue prop types should not be any
    super();
    this.state ={
      kaseyaFetching:false,
      kaseyaTransmitting: false,
      KaseyaFormModel: new KaseyaFormModel(),
      disableForm: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange (e:ChangeEvent<HTMLInputElement>):void{
//TODO: resolve issue of type of e instead of any
    const target:HTMLInputElement= e.target as HTMLInputElement;
    const inputValue:string = target.value;
    const fieldName:string = target.name;
    // this.setState({
    //   [name]: value
    // });
    let state=this.state;
    // state.KaseyaFormModel[fieldObjectName].value = inputValue //{M.A}: TODO: bad approach
    this.updateFormFieldInState(state.KaseyaFormModel[fieldName].name, inputValue);

    let disableForm:boolean = false;
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
    Object.keys(state.KaseyaFormModel).forEach((key) => {

      if(!validateField( state.KaseyaFormModel[key] as FormFieldEmailBaseModel ).result){
        disableForm = true;
        return;// break if even on field failed check
      }
    });
    this.setState({disableForm: disableForm});
  }

  handleSubmit(e:FormEvent<HTMLButtonElement>) {
    let state = this.state;
    e.preventDefault();
    this.props.onUpdateKaseya
    ({
      url: state.KaseyaFormModel.url.value,
      userName: state.KaseyaFormModel.userName.value,
      password: state.KaseyaFormModel.password.value
    });
  }

  changeRouteState(e:FormEvent<HTMLLIElement>){
    const target:HTMLInputElement= e.target as HTMLInputElement;
    parent.postMessage({
      name:"route",
      route: target.innerText
    },"*");
  }

  /*
   * formField: string value of form model field name
   * value: value to be assigned to that field.value
   */
  updateFormFieldInState(formField:string, value:string):void {
    let state = this.state;
    this.setState({ KaseyaFormModel:
    { ...state.KaseyaFormModel, [formField]:
      { ...state.KaseyaFormModel[formField], value: value }
    }
    });
  }
  //TODO: {M.A}: set state of url, userName, pass etc in KaseyaForm model object
  componentWillReceiveProps(nextProps:Props):void{
    let state = this.state;
    this.updateFormFieldInState(state.KaseyaFormModel.url.name, nextProps.url);
    this.updateFormFieldInState(state.KaseyaFormModel.userName.name, nextProps.userName);
    this.updateFormFieldInState(state.KaseyaFormModel.password.name, nextProps.password);
    this.setState({kaseyaFetching: nextProps.kaseyaFetching});
    this.setState({kaseyaTransmitting: nextProps.kaseyaTransmitting});
  }

  componentDidMount():void{
    this.props.onViewKaseya();
  }

  render(){
    let state=this.state;
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
                      onChange={(e:ChangeEvent<HTMLInputElement>):void => this.handleChange(e) }
                  />
                </div>

                <div className="row clearfix">
                  <div>&nbsp;</div>
                  <FormFieldBaseComp
                    model = {state.KaseyaFormModel.userName}
                    value={state.KaseyaFormModel.userName.value}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => this.handleChange(e) }
                  />

                  <FormFieldBaseComp
                    model = {state.KaseyaFormModel.password}
                    value={state.KaseyaFormModel.password.value}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
                  />
                  <button onSubmit={this.handleSubmit} >Update</button>
                </div>
                </form>

                <div className="row clearfix">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0 ">
                <div role="alert" className="alert-wrapper alr"
                     id="lblFailed" style={{"display":"none","backgroundColor":"#FDDDDD","color":"#A43432"}}>
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
    );
  }
}

