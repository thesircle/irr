import {FormFieldBaseModel} from "../../common/formModel/FormFieldBaseModel";
import {FormFieldEmailBaseModel} from "../../common/formModel/FormFieldEmailModel";
import {FormFieldPasswordBaseModel} from "../../common/formModel/FormFieldPasswordModel";
import {FormFieldUrlBaseModel} from "../../common/formModel/FormFieldUrlModel";

export class KaseyaFormModel {
  [key: string]: FormFieldBaseModel;
  url:FormFieldUrlBaseModel;
  userName:FormFieldEmailBaseModel;
  password:FormFieldPasswordBaseModel;

  constructor(){
    this.url = new FormFieldUrlBaseModel();
    this.userName = new FormFieldEmailBaseModel();
    this.userName.name = "userName";
    this.password = new FormFieldPasswordBaseModel();
  }
}