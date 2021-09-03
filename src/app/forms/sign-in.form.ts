import { AbstractControl, FormControl, FormGroup, Validators } from "@angular/forms";

export const SIGNIN_FORM: {[key: string]: AbstractControl} = {
    username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/.*@.*/ig)])
};
