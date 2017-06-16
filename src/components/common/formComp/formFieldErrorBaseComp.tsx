export const error:any = (props):any => {
  let defaultValue:string = "";
  return (
  <span className="error" >
    {props.value ? props.value: defaultValue}
  </span>
  );
};

