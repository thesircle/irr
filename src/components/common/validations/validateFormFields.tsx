/*
 * We can use validatejs, ajv, joi later
 */
export const validateField:any = (model):any => {
  let result:boolean= true;//being permissive
  let message:string= "";
  if(model.isRequired && model.value === ""){
    message += " not be empty";
    result= false;
  }

  if(model.isFormateRequired && !model.regex.test(model.value)){
    message += (result? " be": " &") + " in correct format";
    result= false;
  }

  //todo password, max/min length etc

  let preMessage:string = result? "": model.label+" should";
  return {result: result,message: preMessage+message};
};

