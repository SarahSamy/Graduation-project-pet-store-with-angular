import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/_model/Type';
import { TypeService } from 'src/app/_services/type.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-discover-pet',
  templateUrl: './discover-pet.component.html',
  styleUrls: ['./discover-pet.component.scss']
})
export class DiscoverPetComponent implements OnInit {
  data: Type[];
  config:any;
  typeSerrvice:TypeService;
  constructor(types:TypeService) { 
    this.typeSerrvice=types;
   
    this.data=this.typeSerrvice.getAllTypes();
  }
  pageChanged(event){
    this.config.currentPage = event;
  }
  ngOnInit() {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.data.length
    }
  }

}
