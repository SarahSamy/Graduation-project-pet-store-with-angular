import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  page = 4;
  
  @Output() pageClick = new EventEmitter<any>();

  constructor() {
    
   }

  ngOnInit() {
  }

}
