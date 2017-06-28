/*
 * We can use validatejs, ajv, joi later
 */
import {FormFieldBaseModel} from "../formModel/FormFieldBaseModel";

export const validateField = (props:FormFieldBaseModel) => {
  let result:boolean = true;//being permissive
  let message:string = "";

  if(props.isRequired && props.value === ""){
    message += " not be empty";
    result= false;
  }

  if(props.isFormateRequired && !props.regex.test(props.value)){
    message += (result? " be": " &") + " in correct format";
    result= false;
  }

  //todo password, max/min length etc

  let preMessage:string = result? "": props.label+" should";
  return {result: result,message: preMessage + message};
};

