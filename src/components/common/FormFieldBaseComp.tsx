import {Component} from 'react';
import formValidationUtils from '../../utils/formValidationutils';
import {Error} from './formFieldErrorBaseComp';

export class FormFieldBaseComp extends Component<any,any>{

    constructor(props){
        super(props);

        this.state = {
             classNames: "col-lg-4 col-md-4 col-sm-12 col-xs-12 sm-p-l-0 tab-p-l-0"
        };
    }

    componentWillReceiveProps(newProps){
        newProps.className ? this.setState({classNames:newProps.className}) : null;
        typeof  newProps.value != "undefined" ? (this.props as any).object._value = newProps.value: null ;
        for(var event in newProps.events){
            (this.props as any).object["_"+event] = newProps.events[event];
        }

    }


    render(){
        let props = this.props as any;
        return(
            <div className={(this.state as any).classNames}>
                <div className="form-group form-group-default pg-form-group">
                    <label className="label-style">{props.object._label}</label>
                    <input
                        ref={props.object._name}
                        type={props.object._type}
                        required={props.object._isRequired}
                        name={props.object._name}
                        onChange={props.object._onChange}
                        value={props.object._value}
                        className="form-control"
                        placeholder={props.object._placeHolder} />
                    <Error  value={props.object._value} validation={{type : props.object._validationType , value:formValidationUtils(props.object._validationType,props.object._value)}} />
                </div>
            </div>
        )
    }
}



