export const error:any = props => {
  let defaultValue = "";
  return (
  <span className="error" >
    {props.value ? props.value: defaultValue}
  </span>
  );
};

