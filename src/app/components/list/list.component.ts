import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UcfirstPipe } from 'src/app/pipes/ucfirst.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input("items") items: any[] = [];

  @Output("buy") buyEvent = new EventEmitter<any>();

  index = 2;
  page = 0;
  size = 2;

  constructor() { }

  ngOnInit(): void {
  }

  emitBuyEvent(item: any) {
    this.buyEvent.emit(item.id);
  }

  handleSelectPage(page: number) {
    this.page = page;
  }
  handlePreviousPage() {
    this.page = this.page - 1;
  }
  handleNextPage() {
    this.page = this.page + 1;
  }

  handleSizeChange({target}: Event) {
    const select: HTMLSelectElement = target as HTMLSelectElement;
    this.size = parseInt(select.value);
    this.page = 1;
  }
}
