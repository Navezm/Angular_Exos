import { AbstractControl, FormControl, Validators } from "@angular/forms";

export const ADD_PRODUCT: {[key: string]: AbstractControl} = {
    id: new FormControl(null, [Validators.required, Validators.pattern("\\d.*")]),
    name: new FormControl(null, Validators.required),
    price: new FormControl(null, [Validators.required, Validators.pattern("\\d.*")]),
    type: new FormControl(null, Validators.required),
    img: new FormControl(null, Validators.required)
}
