import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Output("up") nextPage: any = new EventEmitter < any > ();
  @Output("down") prevPage: any = new EventEmitter < any > ();
  @Output("selectPage") selectPageEvent: any = new EventEmitter<any>();

  @Input("longueurListe") lengthlist: number = 0;
  @Input("pageNumber") pageNumber: number = 1;
  @Input("amountDisplayed") amountDisplayed: number = 2;

  get AmountPages(): number {
    return Math.ceil(this.lengthlist / this.amountDisplayed)
  }

  get pagesArray(): number[] {
    return new Array(this.AmountPages).fill(0).map((x, i) => i + 1);
  }

  constructor() {}

  ngOnInit(): void {}

  pageUp() {
    if (this.pageNumber < this.AmountPages) {
      this.nextPage.emit();
    }
  }

  pageDown() {
    if (this.pageNumber > 1) {
      console.log("pagedown pagination")
      this.prevPage.emit();
    }
  }

  selectPage(value : number){
    this.selectPageEvent.emit(value);
  }
}
