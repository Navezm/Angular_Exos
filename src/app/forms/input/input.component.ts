import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'mat-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {
  @Input("id") id = uuid();
  @Input("label") label: string = "";
  @Input("type") type: 'text' | 'number' | 'email' | 'password' = 'text';

  value: any = null;

  fnChange = (e: any) => {};
  fnTouched = (e: any) => {};

  constructor(@Self() @Optional() private ngControl: NgControl) {
    if (ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.fnChange(this.value);
  }
  registerOnChange(fn: any): void {
    this.fnChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.fnTouched = fn;
  }
}
