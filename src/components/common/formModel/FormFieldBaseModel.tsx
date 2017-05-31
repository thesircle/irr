/*
 * This is the base class that every form field should inherit from.
 *
 * Description: TBC
 *
 * Not making getters/setters as those have support issues
 * with ...spread operators due to no support for non-enumerable properties. Spread operators/immutability/update
 * utils are needed in setting state via setState().
 *
 * More research, optimizations and citations needed
 * This class and subclasses are expected to change in nearby future
 * but the implementation would not get affected
 */
export class FormFieldBaseModel {
  name;
  value = "";
  type = "text";
  label = '';
  placeHolder = "Please fill the field";
  isRequired = true;
  isFormateRequired = false;
  onChange = null;


  constructor(){

  }



}
