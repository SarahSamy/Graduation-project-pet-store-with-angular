import { Component, OnInit } from "@angular/core";
import { Pet } from "src/app/_model/Pet";
import { Category } from "src/app/_model/Category";
import { Type } from "src/app/_model/Type";
import { PetService } from "src/app/_services/pet.service";
import { CategoryService } from "src/app/_services/category.service";
import { TypeService } from "src/app/_services/type.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/_services/user.service.service";

@Component({
  selector: "app-add-animal-form",
  templateUrl: "./add-animal-form.component.html",
  styleUrls: ["./add-animal-form.component.scss"]
})
export class AddAnimalFormComponent implements OnInit {
  pet: Pet;
  categories: Category[];
  selectedTypeCategories: Category[]; ///only for being with mean
  types: Type[];
  addAnimalForm: FormGroup;
  id: number;
  categoryName: string;
  edit: boolean;
  isSubmitted: boolean;
  userService: UserService;

  constructor(
    private PetService: PetService,
    private CategoryService: CategoryService,
    private TypeService: TypeService,
    private router: Router,
    private activatedroute: ActivatedRoute,
    user: UserService
  ) {
    this.userService = user;
    if (this.userService.loginUser) {
      this.id = this.PetService.getAll().length + 1;
      this.edit = false;
      this.isSubmitted = false;
    } else {
      this.router.navigate(["/Login"]);
    }
  }

  ngOnInit() {
    this.addAnimalForm = new FormGroup({
      petId: new FormControl(this.id),
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern(/^[A-Za-z]+(?:[_-][A-Za-z]+)*$/)
      ]),
      age: new FormControl("", [
        Validators.required,
        Validators.max(30),
        Validators.pattern(/^[0-9]*$/)
      ]),
      image: new FormControl("assets/images/animal-19-512.png"),
      category: new FormGroup({
        categoryId: new FormControl("", Validators.required),
        name: new FormControl(this.categoryName),
        fkTypeId: new FormControl("", Validators.required)
      }),
      parentHistoryAndType: new FormControl("", Validators.required),
      food: new FormControl("", Validators.required),
      gender: new FormControl("male"),
      isToAdapted: new FormControl(false),
      medicalCondition: new FormControl("", Validators.required),
      notes: new FormControl("", Validators.required)
    });

    this.categories = this.CategoryService.getAll();
    this.types = this.TypeService.getAllTypes();
    //get id of edited pet
    this.activatedroute.paramMap.subscribe(params => {
      let Id = +params.get("id");
      if (Id) {
        this.getPet(Id);
      }
    });
  }
  getPet(Id: number) {
    this.pet = this.PetService.getById(Id);
    this.editPet(this.pet);
  }
  //fill only th form with edited animal
  editPet(editedPet: Pet) {
    //function to fill ddl of categories by its type
    this.displayTypeCategories(editedPet.category.fkTypeId);

    this.addAnimalForm.patchValue({
      petId: editedPet.petId,
      name: editedPet.name,
      age: editedPet.age,
      image: editedPet.image,
      category: {
        fkTypeId: editedPet.category.fkTypeId,
        categoryId: editedPet.category.categoryId
      },
      parentHistoryAndType: editedPet.parentHistoryAndType,
      food: editedPet.food,
      gender: editedPet.gender,
      isToAdapted: editedPet.isToAdapted,
      notes: editedPet.notes,
      medicalCondition: editedPet.medicalCondition
    });
    this.edit = true;
    // this.isFilled = true;
  }

  onSubmit(categorySelect: HTMLSelectElement) {
    this.isSubmitted = true;
    if (this.addAnimalForm.valid) {
      //getting category name to assign it to the pet will be added
      let selectedCategory =
        categorySelect.options[categorySelect.selectedIndex].text;
      this.addAnimalForm
        .get("category")
        .get("name")
        .setValue(selectedCategory);

      //add or edit the pet

      this.pet = this.addAnimalForm.value;
      if (this.edit) {
        this.PetService.update(this.pet);
      } else {
        this.PetService.addPet(this.pet);
      }
      this.addAnimalForm.reset();
      this.router.navigate(["/pet-profile", this.pet.petId]);
      // this.router.navigate(["/pet-listing"]);
    }
  }
  displayTypeCategories(typeSelect) {
    let selectedTypeId = +typeSelect;
    this.selectedTypeCategories = this.categories.filter(
      c => c.fkTypeId === selectedTypeId
    );
  }
}
