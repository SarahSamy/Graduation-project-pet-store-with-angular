import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { PetService } from 'src/app/_services/pet.service';

@Component({
  selector: 'pet-listing',
  templateUrl: './pet-listing.component.html',
  styleUrls: ['./pet-listing.component.scss']
})
export class PetListingComponent implements OnInit {
  @Input() data: Pet[]
  constructor(private petService: PetService) { }

  ngOnInit() {
    if(!this.data){
      this.data= this.petService.getAll();
    }
  }

}
