import formValidationUtils from '../../utils/formValidationutils';
import {Error} from './formFieldErrorComp';

export const FormField = (prop) => {
    var classNames = "col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0";
    var type = "text";
    typeof prop.className === "undefined" ? classNames : classNames =  prop.className  ;
    prop.type === "password" ? type = prop.type : type;
    return(
        <div className={classNames}>
            <div className="form-group form-group-default pg-form-group">
                <label className="label-style">{prop.fieldName}</label>
                <input type={type} required={true} name={prop.name} onChange={prop._onChange} value={prop.value} className="form-control" placeholder={prop.placeholder} />
            </div>
            <Error validation={{type : prop.type , value:formValidationUtils(prop.type,prop.value)}} />
        </div>
    )
}
