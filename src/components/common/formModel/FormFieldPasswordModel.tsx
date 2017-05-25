import {FormFieldBaseModel} from './FormFieldBaseModel'
export class FormFieldPasswordBaseModel extends FormFieldBaseModel{
    constructor(){
        super()
    }

    protected _name = "password";
    protected _type = "password";
    protected _label = "Password";
    protected _placeHolder = "Enter Password";
    protected _validationType = "password"

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
