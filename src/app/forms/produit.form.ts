import { AbstractControl, FormControl, Validators } from "@angular/forms";

export const PRODUITCREATE_FORM: {[key: string]: AbstractControl} = {
    nom: new FormControl(null, [Validators.required, Validators.pattern(/^PROD.*/ig)]),
    prix: new FormControl(null, [Validators.required, Validators.min(0)]),
    type: new FormControl('Vetement', [Validators.required]),
    img: new FormControl(null, [Validators.required])
};