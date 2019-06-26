import { FormGroup } from '@angular/forms';

export function PasswordValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
<<<<<<< HEAD
            console.log(control.value);
            console.log(matchingControl.value)
=======
           
>>>>>>> c0d9f6a01aebab9b4bd367b006f036a3a3218d1b

            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
