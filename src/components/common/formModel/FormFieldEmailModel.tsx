import {FormFieldBaseModel} from './FormFieldBaseModel'
export class FormFieldEmailBaseModel extends FormFieldBaseModel{
    constructor(){
        super()
    }

    protected _name = "email";
    protected _type = "text";
    protected _label = "User Name";
    protected _placeHolder = "CW Integrator Login";
    protected _validationType = "email"

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

    set validationType(value) {
        this._validationType = value;
    }
    get validationType() {
        return this._validationType;
    }

}
