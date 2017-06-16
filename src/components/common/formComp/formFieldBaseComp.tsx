import {Component} from "react";
import {error as Error} from "./formFieldErrorBaseComp";
import {validateField} from "../validations/validateFormFields";

export class FormFieldBaseComp extends Component<any,any>{

  constructor(props:any){
    super(props);
    this.state = {
      classNames: "col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0"
    };
  }

  componentWillReceiveProps(newProps:any):void{
    let props:any = this.props as any;
    newProps.className ? this.setState({classNames:newProps.className}) : null;
    typeof  newProps.value !== "undefined" ? props.model.value = newProps.value: null ;
    props.model.onChange = newProps.onChange;

  }

  render():any{
    let error:any;
    let props:any = this.props as any;
    return(
            <div className={(this.state as any).classNames}>
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

