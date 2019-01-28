import {AbstractControl} from '@angular/forms';

export class ConfirmPasswordValidator {
    static MatchPassword(control: AbstractControl) {
       let password = control.get('pswd').value;

       let confirmPassword = control.get('cnfPswd').value;

        if(password != confirmPassword) {
            control.get('cnfPswd').setErrors( {ConfirmPassword: true} );
        } else {
            return null
        }
    }
}