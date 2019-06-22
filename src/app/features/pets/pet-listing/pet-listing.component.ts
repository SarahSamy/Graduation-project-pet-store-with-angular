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
  @Input() mostViewed: Pet[];
  petService: PetService;
  config: any;
  // id:Number
  page: number;
  pageSize: number;
  collectionSize: number;
  showed: number;

  constructor( test: PetService) {
    this.page = 1;
    this.pageSize = 4;
    this.collectionSize = 9;
    this.showed = 4;
    this.petService = test;
    if (!this.data) {
      this.data = this.petService.getAll();
    }
    if (!this.mostViewed) {
      this.mostViewed = this.petService.getMostViews();
    }
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      // totalItems: this.data.length
    }

  }
  pageChanged(event){
    this.config.currentPage = event;
    
  }
 
  ngOnInit() {
    
  }
  // getCats() {
  //   this.data = this.petService.getAllCats();
  //   // alert("cattttttt");
  //   return this.petService.getAllCats();
  // }
  // getDogs() {
  //   this.data = this.petService.getAllDogs();
  //   return this.petService.getAllDogs();
  // }
  // getBirds() {
  //   this.data = this.petService.getAllBirds();
  //   return this.petService.getAllBirds();
  // }
  // getOthers() {
  //   this.data = this.petService.getAllOthers();
  //   return this.petService.getAllOthers();
  // }
  getOthers() {
    this.data = this.petService.getAllOthers();
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.data.length
    }
  }
  // getAll() {
  //   this.data = this.petService.getAll();
  //   return this.petService.getAll();
  // }
  // getMostViews() {
  //   this.mostViewed = this.petService.getMostViews();
  //   return this.mostViewed;
  // }
  getMostViews() {
    this.mostViewed = this.petService.getMostViews();
    return this.mostViewed;
  }

  // myalert(text: string) {
  //   alert(text);
  // }


  getAllTypes() {
    this.data = this.petService.getAll();
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.data.length
    }
  }

  getByPetType(typeId: number) {
    this.data = this.petService.getByType(typeId);
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.data.length
    }
    //return this.data;
  }








  nextPage() {
    if (this.showed > 0) {
      this.page++;
      this.showed = this.collectionSize - this.pageSize;
    }

  }

  myalert(text: string) {
    alert(text);
  }


  //-----------------------------------------------------------------
  // getCats() {
  //   this.data = this.petService.getAllCats();
  //   // alert("cattttttt");
  //   return this.petService.getAllCats();
  // }
  // getDogs() {
  //   this.data = this.petService.getAllDogs();
  //   return this.petService.getAllDogs();
  // }
  // getBirds() {
  //   this.data = this.petService.getAllBirds();
  //   return this.petService.getAllBirds();
  // }

  // getAll() {
  //   this.data = this.petService.getAll();
  //   return this.petService.getAll();
  // }
  //--------------------------------------------





  // getId(range:number[]){
  //   for(let i=0;i<range.length;i++){
  //     return this.data.find((p) => p.id === i);
  //   }

  // }


}
