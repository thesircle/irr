export const Error = (prop) => {
    let errMessage = <span className="error">&nbsp;</span>
    switch (prop.isSubmitted){
        case false:{
            if(prop.value === "")
                return errMessage;
            else if(!prop.validation.value)
                errMessage = <span className="error">{prop.validation.type} is invalid</span>
            break;
        }
        case true:{
            if(prop.value === "")
                errMessage = <span className="error">{prop.validation.type} is required</span>
            else if(!prop.validation.value)
                errMessage = <span className="error">{prop.validation.type} is invalid</span>
            break;
        }
        default:{

        }
    }
    return errMessage;
}

