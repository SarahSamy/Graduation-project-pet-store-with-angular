import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() images: string []
  constructor() {
    if(!this.images){
      this.images=["../../../assets/images/care1.jpg","../../../assets/images/care3.jpg","../../../assets/images/care4.jpg"]
     }
   }

  ngOnInit() {
  }

}
