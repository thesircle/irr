export class FormField {
  private _name;
  private _value;
  private _type = "text";
  private _label;
  private _placeHolder;
  private _isRequired = true;
  private _isFormateRequired = true;

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

// constructor(name, value, type, label, isRequired, isFormateRequired){
//     this.name = name;
//     this.value = value;
//     this.type = type;
//     this.label = label;
//     this.placeHolder;
//     this.isRequired = isRequired;
//     this.isFormateRequired = isFormateRequired;
//   }
}
