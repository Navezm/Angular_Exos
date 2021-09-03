import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PRODUITCREATE_FORM } from '../forms/produit.form';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm = new FormGroup(PRODUITCREATE_FORM);

  constructor() { }

  ngOnInit(): void {
  }


  handleSubmit() {
    console.log(this.createForm.value);
  }
}
