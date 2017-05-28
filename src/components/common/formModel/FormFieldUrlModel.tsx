import {FormFieldBaseModel} from './FormFieldBaseModel'
export class FormFieldUrlBaseModel extends FormFieldBaseModel{
  get isFormateRequired(): boolean {
    return this._isFormateRequired;
  }

  set isFormateRequired(value: boolean) {
    this._isFormateRequired = value;
  }
  get regex(): RegExp {
    return this._regex;
  }

  set regex(value: RegExp) {
    this._regex = value;
  }

  constructor(){
    super()
  }

  protected _name = "url";
  protected _label = "Server Url";
  protected _placeHolder = "Enter your CW FQDN. E.g. https://api-na.myconnectwise.net";
  protected _isFormateRequired = true;
  protected _regex = new RegExp(
    "^" +
    "(?:(?:https?|ftp)://)" +
    "(?:\\S+(?::\\S*)?@)?" +
    "(?:" +
    "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
    "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
    "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
    "|" +
    "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
    "\\.?" +
    ")" +
    "(?::\\d{2,5})?" +
    "(?:[/?#]\\S*)?" +
    "$", "i"
  );


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
}
