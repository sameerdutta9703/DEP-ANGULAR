import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidatePassword]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidatePasswordDirective, multi: true}]
})
export class ValidatePasswordDirective implements Validator{

  @Input('appValidatePassword') passwordRegEx: string;
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    const testMatch = new RegExp(this.passwordRegEx).test(control.value);
    return testMatch ? null : { 'invalidPassword': { value: control.value } };
  }
  
}
