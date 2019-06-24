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
  flag: boolean;
  // id:Number
  page: number;
  pageSize: number;
  collectionSize: number;
  showed: number;
  dataByType: Pet[];


  constructor(test: PetService) {
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
    this.flag = false;
  }
  pageChanged(event) {
    this.config.currentPage = event;

  }

  ngOnInit() {
    this.getAllTypes();
  }

  getOthers() {
    this.data = this.petService.getAllOthers();
    this.data = this.data.filter(p => p.isToAdapted == true && p.isDeleted == false);
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.data.length
    }
  }

  getMostViews() {
    this.mostViewed = this.petService.getMostViews().filter(p => p.isToAdapted == true && p.isDeleted == false);
    return this.mostViewed;
  }



  getAllTypes() {
    // this.data = this.petService.getAll().filter(pet => pet.isToAdapted === true);
    this.data = this.petService.getAllAdapted();
    this.data = this.data.filter(p => p.isToAdapted == true && p.isDeleted == false);
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.data.length
    }
  }

  getByPetType(typeId: number) {

    this.data = this.petService.getByTypeAdapted(typeId).filter(p => p.isToAdapted == true && p.isDeleted == false);
    this.dataByType = this.data;
    this.flag = true;
    // this.data=this.data.filter(p=>p.isToAdapted==true && p.isDeleted==false);
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.data.length
    }
    //return this.data;
    
  }


  deletePet(id) {
    this.petService.delete(id);
    console.log(id);
    if (!this.flag) {
      this.data = this.petService.data.filter(p => p.isDeleted == false && p.isToAdapted === true)
    }
    else {
      this.data = this.dataByType.filter(p => p.isDeleted == false && p.isToAdapted === true);
      console.log(this.data)
    }
    this.getMostViews();
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


}
