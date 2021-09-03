import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() items = new Map<any, number>();
  @Output("remove") removeEvent = new EventEmitter<number>();

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

  remove(product : any){
    this.removeEvent.emit(product);
  }

}
