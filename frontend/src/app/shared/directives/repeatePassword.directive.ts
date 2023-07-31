import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function repeatePasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    let password = control.get('password')?.value;
    let repeatPassword = control.get('confirmPassword')?.value;
    
    if (repeatPassword.length > 0 && password !== repeatPassword) {
      control.get('confirmPassword')?.setErrors({mismatch: true});
      return {mismatch: true};
    } else {
      return null;
    }
  };
}