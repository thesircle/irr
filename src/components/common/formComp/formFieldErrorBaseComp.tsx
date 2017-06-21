interface MyProps{
  value:string;
}
export const error = (props:MyProps) => {
  let defaultValue:string = "";
  return (
  <span className="error" >
    {props.value ? props.value: defaultValue}
  </span>
  );
};


