import {
  Component,
  OnInit,

} from "@angular/core";
import { Category } from "src/app/_model/category";
import { CategoryService } from "src/app/_services/category.service";
import { Type } from "src/app/_model/type";
import { Pet } from "src/app/_model/pet";
import { PetService } from "src/app/_services/pet.service";
import {  Router, ActivatedRoute } from "@angular/router";
import { TypeService } from "src/app/_services/type.service";


@Component({
  selector: "app-animal-types",
  templateUrl: "./animal-types.component.html",
  styleUrls: ["./animal-types.component.scss"]
})
export class AnimalTypesComponent implements OnInit {
  allCategories: Category[];
  alltypes: Type[];
  allPets: Pet[];
  // @Input()
  selectedTypeCategories: Category[];
  selectedTypeId: number;
  selectedCategoryPets: Pet[];
  displayed: any[];
  config: any;
  route: ActivatedRoute;

  constructor(
    private typeService: TypeService,
    private categoryService: CategoryService,
    private petService: PetService,
    private router: Router,
    private _Activatedroute: ActivatedRoute
  ) {
    this.selectedTypeId = +this._Activatedroute.snapshot.paramMap.get("typeId");
    //= 2; ///temporary till come from israa component
  }

  // display categories of selected type and reset ddl values with each type select //
  displayTypeCategories(
    TypeSelect?: HTMLSelectElement,
    ageSelect?: HTMLSelectElement,
    genderSelect?: HTMLSelectElement
  ) {
    if (TypeSelect) {
      this.selectedTypeId = +TypeSelect.value;
      genderSelect.value = "0";
      ageSelect.value = "0";
    }
    this.selectedTypeCategories = this.allCategories.filter(
      c => c.fkTypeId === this.selectedTypeId
    );
    this.displayed = this.selectedTypeCategories;
    this.config = {
      itemsPerPage: 11,
      currentPage: 1,
      totalItems: this.displayed.length
    };
  }

  ngOnInit() {
    this.alltypes = this.typeService.getAllTypes();
    this.allCategories = this.categoryService.getAll();
    this.allPets = this.petService.getAll();
    // display categoris of selected type in DiscoverAnimalPage when page first upload//
    
    this.displayTypeCategories();
  }
  pageChanged(event) {
    this.config.currentPage = event;
  }
  searchClick(categorySelect, genderSelect, ageSelect) {
    // display pets of selected categories//
    let selectedCategory = +categorySelect.value;
    if (selectedCategory) {
      this.displayed = this.allPets.filter(
        pet => pet.category.categoryId == selectedCategory
      );
      // display pets of selected gender//
      let selectedGender = genderSelect.value;
      if (selectedGender) {
        this.displayed = this.displayed.filter(pet => {
          switch (selectedGender) {
            case "A":
              return pet;

            case "M":
              return pet.gender == "male" || pet.gender == "Male";

            case "F":
              return pet.gender == "female" || pet.gender == "Female";
            default:
              return pet;
          }
        });
      }
      // display pets of selected age//
      let selectedAge = +ageSelect.value;
      if (selectedAge) {
        this.displayed = this.displayed.filter(pet => {
          switch (selectedAge) {
            case 1:
              return pet;

            case 2:
              return pet.age >= 1 && pet.age <= 2;

            case 3:
              return pet.age >= 3 && pet.age <= 5;

            case 4:
              return pet.age >= 6;

            default:
              return pet;
          }
        });
       
      }
     
    }
    this.config = {
      itemsPerPage: 11,
      currentPage: 1,
      totalItems: this.displayed.length
    };
  }
  //function to route pet to pet profile /or/ category to category info
  routePage(item) {
    if (!item.petId) {
      this.router.navigate(["/discover/categories", item.categoryId]);
    } else {
      this.router.navigate(["/pet-profile", item.petId]);
    }
  }
}
