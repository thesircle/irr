import {ChangeEvent, Component, EventHandler, FormEvent} from "react";
import {error as Error} from "./formFieldErrorBaseComp";
import {validateField} from "../validations/validateFormFields";
import {FormFieldBaseModel} from "../formModel/FormFieldBaseModel";
// interface MyNewProps{
//   className:string;
//   value:string;
//   onChange:Event;
// }
interface Props{
  model:FormFieldBaseModel;
  className:string;
  value:string;
  onChange:EventHandler<ChangeEvent<HTMLInputElement>>;
}
// interface Model{
//   value:string;
//   label:string;
//   name:string;
//   type:string;
//   isRequired:boolean;
//   placeHolder:string;
//   isFormateRequired:boolean;
//   onChange:EventHandler<ChangeEvent<HTMLInputElement>>;
//   regex:RegExp;
// }
interface State{
  classNames:string;
}
export class FormFieldBaseComp extends Component<Props,State>{

  constructor(){
    super();
    this.state = {
      classNames: "col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0"
    };
  }

  componentWillReceiveProps(newProps:Props):void{
    // let props = this.props;
    // newProps.className ? this.setState({classNames:newProps.className}) : null;
    // typeof  newProps.value !== "undefined" ? props.model.value = newProps.value: null ;
    // props.model.onChange = newProps.onChange;

  }

  render()
  {
    let props = this.props;
    return(
      <div className={(this.state).classNames}>
        <div className="form-group form-group-default pg-form-group">
          <label className="label-style">{props.model.label}</label>
          <input
            ref={props.model.name}
            type={props.model.type}
            required={props.model.isRequired}
            name={props.model.name}
            onChange={props.model.onChange}
            value={props.model.value}
            className="form-control"
            placeholder={props.model.placeHolder} />
          <Error value={validateField(props.model).message} />
        </div>
      </div>
    );
  }
}