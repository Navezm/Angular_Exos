import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ADD_PRODUCT } from 'src/app/form/form';
import { v4 as id } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  addProductForm: FormGroup = new FormGroup(ADD_PRODUCT);

  constructor() { }

  ngOnInit(): void {
  }

  @Output("formInfo") formEvent = new EventEmitter<any>();

  formAction(product : any){
    if(this.addProductForm.valid) {
      this.formEvent.emit(product);
    } else {
      console.log("Echec");
    }
  }
  
}
