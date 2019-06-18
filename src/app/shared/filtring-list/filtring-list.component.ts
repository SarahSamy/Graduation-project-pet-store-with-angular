import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TypeService } from 'src/app/_services/type.service';

@Component({
  selector: 'filtring-list',
  templateUrl: './filtring-list.component.html',
  styleUrls: ['./filtring-list.component.scss']
})
export class FiltringListComponent implements OnInit {
  @Output() catClick= new EventEmitter<any>();
  @Output() dogClick= new EventEmitter<any>();
  @Output() birdClick= new EventEmitter<any>();
  @Output() othersClick= new EventEmitter<any>();
  @Output() allClick= new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  
  
  
}
