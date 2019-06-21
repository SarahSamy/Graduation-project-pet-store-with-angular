import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {
  @Input() images:string[]
  
  constructor() {
    if(!this.images){
      this.images=["../../../assets/images/care1.jpg","../../../assets/images/care3.jpg","../../../assets/images/care4.jpg"]
     }
   }

  ngOnInit() {
   
  }

}
