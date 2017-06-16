import {FormFieldBaseModel} from "./FormFieldBaseModel";
export class FormFieldEmailBaseModel extends FormFieldBaseModel{

  constructor(){
    super();
  }

  name:string = "userName";
  type:string = "text";
  label:string = "User Name (userName)";
  placeHolder:string = "CW Integrator Login";
  isFormateRequired:boolean = true;
  regex:RegExp =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+)+\.(([a-zA-Z0-9])+)$/;
}
