import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Category } from 'src/app/_model/category';
import { CategoryService } from 'src/app/_services/category.service';
import { Type } from '@angular/compiler/src/core';
import { Pet } from 'src/app/_model/pet';
import { PetService } from 'src/app/_services/pet.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-animal-types',
  templateUrl: './animal-types.component.html',
  styleUrls: ['./animal-types.component.scss']
})
export class AnimalTypesComponent implements OnInit {

  allCategories: Category[];
  selectedTypeCategories: Category[];
  // @Input()
  selectedTypeId: number;
  selectedCategoryPets: Pet[];


  constructor(private categoryService: CategoryService, private petService: PetService) {
    this.selectedTypeId = 2;///temporary till come from israa component
  }

  ngOnInit() {
    this.allCategories = this.categoryService.getAll();
    this.selectedTypeCategories = this.allCategories.filter(c => c.fkTypeId === this.selectedTypeId)
  }

  displayCategoryPets(e) {
    // let id=(e.srcElement as HTMLInputElement).target.value;
    let id = e.target.value;
    // this.selectedCategoryPets = this.petService.getByCategory();
    console.log(this.selectedCategoryPets);
  }
}
