import {FormFieldBaseModel} from "./FormFieldBaseModel";
export class FormFieldEmailBaseModel extends FormFieldBaseModel{

  constructor(){
    super();
  }

  name:string = "userName";
  type:string = "text";
  label:string = "Login";
  placeHolder:string = "Enter Email";
  isFormateRequired:boolean = true;
  regex:RegExp =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+)+\.(([a-zA-Z0-9])+)$/;
}
