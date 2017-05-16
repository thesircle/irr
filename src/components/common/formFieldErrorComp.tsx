export const Error = (prop) => {
    let errMessage = <span>&nbsp;</span>
    if(typeof prop.validation != undefined && !prop.validation.value)
        errMessage = <span>{prop.validation.type} is required</span>
    return errMessage
}

