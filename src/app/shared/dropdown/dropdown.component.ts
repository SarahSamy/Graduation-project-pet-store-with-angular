import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  isOpened:boolean;
  constructor() { 
    this.isOpened=false;
    console.log(this.isOpened);
  }

  ngOnInit() {
  }

}