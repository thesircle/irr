import {FormFieldBaseModel} from '../../common/formModel/FormFieldBaseModel'
import {FormFieldUrlBaseModel} from "../../common/formModel/FormFieldUrlModel";
import {FormFieldEmailBaseModel} from "../../common/formModel/FormFieldEmailModel"
import {FormFieldPasswordBaseModel} from "../../common/formModel/FormFieldPasswordModel"

export class KaseyaFormModel {
   url;
   email;
   password;

  constructor(){
    this.url = new FormFieldUrlBaseModel();
    this.email = new FormFieldEmailBaseModel();
    this.email.name = "userName";
    this.password = new FormFieldPasswordBaseModel();
  }
}