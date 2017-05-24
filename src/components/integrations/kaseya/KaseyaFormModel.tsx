import {FormFieldBaseModel} from '../../common/FormFieldBaseModel'

export class KaseyaFormModel {
  private _url;
  private _email;
  private _password;

  constructor(){
    this._url = new FormFieldBaseModel();
    this._url.name = "url";
    this._url.label = "Server Url";
    this._url.placeHolder = "Enter your CW FQDN. E.g. https://api-na.myconnectwise.net";
    this._url.validationType = "url"

    this._email = new FormFieldBaseModel();
    this._email.name = "email";
    this._email.placeHolder = "CW Integrator Login"
    this._email.label = "Enter username";
    this._email.validationType = "email"

    this._password = new FormFieldBaseModel();
    this._password.name = "password";
    this._password.type = "password"
    this._password.placeHolder = "Enter Password"
    this._password.label = "Enter Password";
    this._password.validationType = "password"
  }

  get url() {
    return this._url;
  }

  set url(value) {
    this._url = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value;
  }
  set password(value) {
    this._password = value;
  }
  get password() {
    return this._password;
  }

}