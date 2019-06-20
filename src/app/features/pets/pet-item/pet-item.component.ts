import { Component, OnInit,Input } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { PetService } from 'src/app/_services/pet.service';
@Component({
  selector: 'pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss']
})
export class PetItemComponent implements OnInit {
  @Input() pet : Pet;
  @Input() data
  constructor(private petService:PetService) { 
    // this.pet= {name:'Photo Camera',id:1,image:'assets/images/dog1.jpg' }
    
  }

  ngOnInit() {
    if (!this.data) {
      this.data = this.petService
     return this.data
    }

  }

}
