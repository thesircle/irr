import {ChangeEvent, Component, EventHandler, FormEvent} from "react";
import {FormFieldBaseModel} from "../formModel/FormFieldBaseModel";
import {error as Error} from "./formFieldErrorBaseComp";
import {validateField} from "../validations/validateFormFields";

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
interface State{
  classNames:string;
}
export class FormFieldBaseComp extends Component<any,State>{

  constructor(props){
    super(props);
    this.state = {
      classNames: "col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0"
    };
  }

  render(){
    let error;
    let props = this.props;
    let state = this.state;
    return(
            <div className={(props.classNames) ? props.classNames : state.classNames}>
                <div className="form-group form-group-default pg-form-group">
                    <label className="label-style">{props.model.label}</label>
                    <input
                        ref={props.model.name}
                        type={props.model.type}
                        required={props.model.isRequired}
                        name={props.model.name}
                        onChange={props.onChange}
                        value={props.model.value}
                        className="form-control"
                        placeholder={props.model.placeHolder} />
                    <Error value={validateField(props.model).message} />
                </div>
            </div>
    );
  }
}

