import {FormFieldBaseModel} from './FormFieldBaseModel'
export class FormFieldEmailBaseModel extends FormFieldBaseModel{

  constructor(){
      super()
  }

  name = "email";
  type = "text";
  label = "User Name (email)";
  placeHolder = "CW Integrator Login";
  isFormateRequired = true;
  regex =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+)+\.(([a-zA-Z0-9])+)$/
}
