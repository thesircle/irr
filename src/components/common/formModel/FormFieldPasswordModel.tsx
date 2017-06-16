import {FormFieldBaseModel} from "./FormFieldBaseModel";
export class FormFieldPasswordBaseModel extends FormFieldBaseModel{

  constructor(){
    super();
  }

  name:string = "password";
  type:string = "password";
  label:string = "Password";
  placeHolder:string = "Enter Password";
}
