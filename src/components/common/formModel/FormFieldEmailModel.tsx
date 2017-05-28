import {FormFieldBaseModel} from './FormFieldBaseModel'
export class FormFieldEmailBaseModel extends FormFieldBaseModel{
    get isFormateRequired(): boolean {
        return this._isFormateRequired;
    }

    set isFormateRequired(value: boolean) {
        this._isFormateRequired = value;
    }

    get regex(): RegExp {
        return this._regex;
    }

    set regex(value: RegExp) {
        this._regex = value;
    }
    constructor(){
        super()
    }

    protected _name = "email";
    protected _type = "text";
    protected _label = "User Name (email)";
    protected _placeHolder = "CW Integrator Login";
    protected _isFormateRequired = true;
    protected _regex =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+)+\.(([a-zA-Z0-9])+)$/

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }


    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;
    }

    get placeHolder() {
        return this._placeHolder;
    }

    set placeHolder(value) {
        this._placeHolder = value;
    }
}
