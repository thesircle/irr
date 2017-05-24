import {FormFieldBaseModel} from './FormFieldBaseModel'
export class FormFieldUrlBaseModel extends FormFieldBaseModel{
  constructor(){
    super()
  }

  protected _name = "url";
  protected _type = "text";
  protected _label = "Server Url";
  protected _placeHolder = "Enter your CW FQDN. E.g. https://api-na.myconnectwise.net";
  protected _validationType = "url"

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }


  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }

  get label() {
    return this._label;
  }

  set label(value) {
    this._label = value;
  }

  get placeHolder() {
    return this._placeHolder;
  }

  set placeHolder(value) {
    this._placeHolder = value;
  }

  set validationType(value) {
    this._validationType = value;
  }
  get validationType() {
    return this._validationType;
  }

}
