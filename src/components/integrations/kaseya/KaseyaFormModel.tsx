import {FormFieldBaseModel} from '../../common/FormFieldBaseModel'
import {FormFieldUrlBaseModel} from "../../common/FormFieldUrlBaseModel";
import {FormFieldEmailBaseModel} from "../../common/FormFieldEmailBaseModel"
import {FormFieldPasswordBaseModel} from "../../common/FormFieldPasswordBaseModel"

export class KaseyaFormModel {
  private _url;
  private _email;
  private _password;

  constructor(){
    this._url = new FormFieldUrlBaseModel();

    this._email = new FormFieldEmailBaseModel();
    this._email.name = "userName";

    this._password = new FormFieldPasswordBaseModel();

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