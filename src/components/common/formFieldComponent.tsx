import formValidationUtils from '../../utils/formValidationutils';
import {Error} from './formFieldErrorComp';

export const FormField = (prop) => {
    prop.value ? prop.object._value = prop.value : prop.value;
    prop.onChange ? prop.object._onChange  = prop.onChange : prop.onChange
    let classNames = "col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0";
    typeof prop.className === "undefined" ? classNames : classNames =  prop.className  ;

    return(
        <div className={classNames}>
            <div className="form-group form-group-default pg-form-group">
                <label className="label-style">{prop.object._label}</label>
                <input
                    type={prop.object._type}
                    required={prop.object._isRequired}
                    name={prop.object._name}
                    onChange={prop.object._onChange}
                    value={prop.object._value}
                    className="form-control"
                    placeholder={prop.object.placeHolder} />
                <Error value={prop.object._value} isSubmitted={prop.isSubmitted} validation={{type : prop.object.validationType , value:formValidationUtils(prop.type,prop.value)}} />
            </div>
        </div>
    )
}

