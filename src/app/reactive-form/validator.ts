import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

  export function userNameValidator(control: AbstractControl): ValidationErrors {
    if((control.value as string).indexOf(" ")>=0)  {
        return {
            userNameValidator:true
        };
    }
    return null;

  }