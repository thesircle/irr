export class FormFieldBaseModel {

  protected _name;
  protected _value = "";
  protected _type = "text";
  protected _label;
  protected _placeHolder = "Please fill the field";
  protected _isRequired = true;
  protected _isFormateRequired = null;
  protected _onChange = null;
  protected _validationType;
  protected _errorField = true;

  constructor(){

  }
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
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

  get isRequired() {
    return this._isRequired;
  }

  set isRequired(value) {
    this._isRequired = value;
  }

  get isFormateRequired() {
    return this._isFormateRequired;
  }

  set isFormateRequired(value) {
    this._isFormateRequired = value;
  }
  get onChange(){
    return this._onChange;
  }
  set onChange(value) {
    this._onChange = value;
  }
  set validationType(value) {
    this._validationType = value;
  }
  get validationType() {
    return this._validationType;
  }
  set errorField(value: boolean) {
    this._errorField = value;
  }
  get errorField(): boolean {
    return this._errorField;
  }

}
