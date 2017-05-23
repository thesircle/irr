import {FormField} from '../../common/FormFieldModel'

class KaseyaForm {
  private _url;
  private _email;

  constructor(){
    this._url = new FormField();
    this._url.name = "url";
    this._url.value = "";
    this._url.type = "text"
    this._url.lable = "Enter Url";

    this._email = new FormField();
    this._email.name = "email";
    this._email.value = "";
    this._email.type = "text"
    this._email.lable = "Enter Email";
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

}