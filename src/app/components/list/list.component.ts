import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UcfirstPipe } from 'src/app/pipes/ucfirst.pipe';
import * as M from 'materialize-css';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input("items") items: any[] = [];

  @Output("buy") buyEvent = new EventEmitter<any>();

  index = 2;
  page = 1;

  constructor(private ucFirst: UcfirstPipe) { }

  ngOnInit(): void {
    console.log(this.ucFirst.transform("hello"));
  }

  ngAfterViewInit() {
    M.AutoInit();
  }

  emitBuyEvent(item: any) {
    this.buyEvent.emit(item.id);
  }

  nextPage() {
    this.page = this.page + 1;
  }

  prevPage(){
    this.page = this.page - 1;
  }

  newFilter(value: any) {

    this.index = parseInt(value.value);
    this.page = 1;
  }

  selectPage(value : number){
    this.page = value;
  }
}
