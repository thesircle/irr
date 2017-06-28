interface IProps{
  value:string;
}
export const error = (props:IProps) => {
  let defaultValue:string = "";
  return (
  <span className="error" >
    {props.value ? props.value: defaultValue}
  </span>
  );
};