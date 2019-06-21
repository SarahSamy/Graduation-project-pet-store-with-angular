import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  countPerPage: number;
  currentIteration: number;
  @Input() pageCount: number;
  @Input() buttonCounts: number;
  @Output() pageClick = new EventEmitter<any>();

  constructor() {
    this.currentIteration = 0;
  }
  counter(i: number) {
    return new Array(i);
  }
  ngOnInit() {
    this.countPerPage = Math.ceil(+this.buttonCounts / +this.pageCount);
  }

}
