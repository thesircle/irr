export const Error = (props) => {
  console.log("inside error comp: "+ props.value)
  let defaultValue = ""
  return (
  <span className="error" >
    {props.value ? props.value: defaultValue}
  </span>
  )
}

