import {FormFieldBaseModel} from "../../common/formModel/FormFieldBaseModel";
import {FormFieldEmailBaseModel} from "../../common/formModel/FormFieldEmailModel";
import {FormFieldPasswordBaseModel} from "../../common/formModel/FormFieldPasswordModel";
import {FormFieldUrlBaseModel} from "../../common/formModel/FormFieldUrlModel";

export class KaseyaFormModel {
  url;
  userName;
  password;

  constructor(){
    this.url = new FormFieldUrlBaseModel();
    this.userName = new FormFieldEmailBaseModel();
    this.userName.name = "userName";
    this.password = new FormFieldPasswordBaseModel();
  }
}