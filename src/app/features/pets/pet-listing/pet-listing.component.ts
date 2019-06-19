import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { PetService } from 'src/app/_services/pet.service';
import { TypeService } from 'src/app/_services/type.service';

@Component({
  selector: 'pet-listing',
  templateUrl: './pet-listing.component.html',
  styleUrls: ['./pet-listing.component.scss']
})
export class PetListingComponent implements OnInit {
  @Input() data: Pet[]
  @Input() mostViewed: Pet[]
  // id:Number

  constructor(private petService: PetService) { }

  ngOnInit() {
    if (!this.data) {
      this.data = this.petService.getAll().filter(p => p.category.fkTypeId < 4);
    }
    if (!this.mostViewed) {
      this.mostViewed = this.petService.getMostViews();
    }

  }
  getCats() {
    this.data = this.petService.getAllCats();
    // alert("cattttttt");
    return this.petService.getAllCats();
  }
  getDogs() {
    this.data = this.petService.getAllDogs();
    return this.petService.getAllDogs();
  }
  getBirds() {
    this.data = this.petService.getAllBirds();
    return this.petService.getAllBirds();
  }
  getOthers() {
    this.data = this.petService.getAllOthers();
    return this.petService.getAllOthers();
  }
  getAll() {
    this.data = this.petService.getAll();
    return this.petService.getAll();
  }
  getMostViews() {
    this.mostViewed = this.petService.getMostViews();
    return this.mostViewed;
  }
  myalert(text: string) {
    alert(text);
  }
  // getId(range:number[]){
  //   for(let i=0;i<range.length;i++){
  //     return this.data.find((p) => p.id === i);
  //   }

  // }


}
