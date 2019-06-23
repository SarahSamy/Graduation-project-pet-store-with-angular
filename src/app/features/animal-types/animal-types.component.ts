import { Component, OnInit, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Category } from 'src/app/_model/category';
import { CategoryService } from 'src/app/_services/category.service';
import { Type } from 'src/app/_model/type';
import { Pet } from 'src/app/_model/pet';
import { PetService } from 'src/app/_services/pet.service';
import { Event } from '@angular/router';
import { TypeService } from 'src/app/_services/type.service';

@Component({
  selector: 'app-animal-types',
  templateUrl: './animal-types.component.html',
  styleUrls: ['./animal-types.component.scss']
})
export class AnimalTypesComponent implements OnInit {

  // @ViewChild('TypeSelect',) 
  // TypeSelect: ElementRef; 

  allCategories: Category[];
  alltypes: Type[];
  allPets: Pet[];
  // @Input()
  selectedTypeCategories: Category[];
  selectedTypeId: number;
  selectedCategoryPets: Pet[];
  displayed: any[];
  config: any;

  constructor(private typeService: TypeService, private categoryService: CategoryService, private petService: PetService) {
    this.selectedTypeId = 2;///temporary till come from israa component
    this.allCategories = this.categoryService.getAll();
    this.allPets = this.petService.getAll();
    // display categoris of selected type in DiscoverAnimalPage when page first upload//
    // this.TypeSelect.value=this.selectedTypeId;
    this.displayTypeCategories();

  }
  // display categories of selected type //
  displayTypeCategories(TypeSelect?: HTMLSelectElement, categorySelect?: HTMLSelectElement, genderSelect?: HTMLSelectElement) {
    if (TypeSelect) {
      this.selectedTypeId = +TypeSelect.value;
      // categorySelect.value = categorySelect.options[categorySelect.selectedIndex].text;
      // console.log(categorySelect.options[categorySelect.selectedIndex]);
      // genderSelect.value = ;
    }
    this.selectedTypeCategories = this.allCategories.filter(c => c.fkTypeId === this.selectedTypeId);
    this.displayed = this.selectedTypeCategories;
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.displayed.length
    }
  }

  ngOnInit() {
    // this.allCategories = this.categoryService.getAll();
    // this.allPets = this.petService.getAll();
    // // display categoris of selected type in DiscoverAnimalPage when page first upload//
    // this.selectedTypeCategories = this.allCategories.filter(c => c.fkTypeId === this.selectedTypeId);
    // this.displayed = this.selectedTypeCategories;
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  searchClick(categorySelect, genderSelect, ageSelect) {

    // display pets of selected categories//
    let selectedCategory = +categorySelect.value;
    if (selectedCategory) {
      this.displayed = this.allPets.filter(pet => pet.category.categoryId == selectedCategory);
      // display pets of selected gender//
      let selectedGender = genderSelect.value;
      if (selectedGender) {
        this.displayed = this.displayed.filter(pet => {
          switch (selectedGender) {
            case "A":
              return pet;

            case "M":
              return pet.gender == "male" || pet.gender == "Male"

            case "F":
              return pet.gender == "female" || pet.gender == "Female"
            default:
              return pet;
          }
        })
        // display pets of selected age//
        let selectedAge = +ageSelect.value;
        if (selectedAge) {
          this.displayed = this.displayed.filter(pet => {
            switch (selectedAge) {
              case 1:
                return pet;

              case 2:
                return pet.age >= 1 && pet.age <= 2

              case 3:
                return pet.age >= 3 && pet.age <= 5

              case 4:
                return pet.age >= 6

              default:
                return pet;
            }
          })
        }
      }
      // console.log(this.displayed);
      // console.log(selectedCategory);
      // console.log(this.allPets);
    }
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.displayed.length
    }
  }
  // console.log(this.displayed);
  // console.log(selectedCategory);
  // console.log(this.allPets);
}


