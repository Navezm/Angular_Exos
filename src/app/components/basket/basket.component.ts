import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() items = new Map<any, number>();

  get total(): number {
    let total = 0;

    for(let [key, value] of this.items.entries()) {
      total += key.prix * value;
    }

    return total;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
