import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'mat-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, AfterViewInit {
  private length: number = 0;
  private sizePage: number = 10;
  private currentPage: number = 1;

  @Input('length') set Length(v: number) { this.length = v; }
  @Input('sizePage') set SizePage(v: number) { this.sizePage = v; }
  @Input('currentPage') set CurrentPage(v: number) { this.currentPage = v; }
  
  @Output("selectPage") selectPageEvent = new EventEmitter<number>();
  @Output("nextPage") nextPageEvent = new EventEmitter<void>();
  @Output("previousPage") previousPageEvent = new EventEmitter<void>();
  
  get Length(): number { return this.length; }
  get SizePage(): number { return this.sizePage; }
  get CurrentPage(): number { return this.currentPage; }

  get Pages(): Array<any> {
    const pages: any[] = [];

    const nbPage = Math.ceil(this.Length / this.SizePage);
    for(let i = 1; i <= nbPage; i++) { pages.push(i); }

    return pages;
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    M.AutoInit();
  }

  handlePrevious() {
    if (this.CurrentPage > 1) {
      this.previousPageEvent.emit();
    }
  }
  handleNext() {
    if (this.CurrentPage < this.Pages.length) {
      this.nextPageEvent.emit();
    }
  }
}
