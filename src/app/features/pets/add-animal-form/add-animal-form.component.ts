import { Component, OnInit } from "@angular/core";
import { Pet } from "src/app/_model/pet";
import { Category } from "src/app/_model/Category";
import { Type } from "src/app/_model/Type";
import { PetService } from "src/app/_services/pet.service";
import { CategoryService } from "src/app/_services/category.service";
import { TypeService } from "src/app/_services/type.service";
import { FormGroup, FormControl, FormControlName, AbstractControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-animal-form",
  templateUrl: "./add-animal-form.component.html",
  styleUrls: ["./add-animal-form.component.scss"]
})
export class AddAnimalFormComponent implements OnInit {
  pet: Pet;
  editedPet: Pet;
  categories: Category[];
  selectedTypeCategories: Category[];
  types: Type[];
  addAnimalForm: FormGroup;
  id: number;
  categoryName: string;

  constructor(
    private PetService: PetService,
    private CategoryService: CategoryService,
    private TypeService: TypeService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) {
    this.id = this.PetService.getAll().length + 1;
  }

  ngOnInit() {
    this.addAnimalForm = new FormGroup({
      petId: new FormControl(this.id),
      name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(/^[A-Za-z]+(?:[_-][A-Za-z]+)*$/)]),
      age: new FormControl("", [Validators.required, Validators.max(100), Validators.pattern(/^[0-9]*$/)]),
      image: new FormControl("assets/images/animal-19-512.png"),
      category: new FormGroup({
        categoryId: new FormControl("", Validators.required),
        fkTypeId: new FormControl("", Validators.required),
        name: new FormControl(this.categoryName)
      }),
      parentHistoryAndType: new FormControl("", Validators.required),
      food: new FormControl("", Validators.required),
      gender: new FormControl(),
      isToAdapted: new FormControl(),
      medicalCondition: new FormControl("", Validators.required),
      notes: new FormControl("", Validators.required)
    });

    // let category=this.addAnimalForm.get('category').get('categoryId') as FormControl;
    // console.log(category as HTMLElement);
    console.log(this.categoryName);

    this.categories = this.CategoryService.getAll();
    this.types = this.TypeService.getAllTypes();

    this.activatedroute.paramMap.subscribe(params => {
      const petId = +params.get("id");
      if (petId) {
        this.getPet(petId);
      }
    });
  }
  getPet(petId: number) {
    this.editedPet = this.PetService.getById(petId);
    this.editPet(this.editedPet);
  }
  editPet(editedPet: Pet) {
    this.addAnimalForm.patchValue({
      name: editedPet.name,
      age: editedPet.age,
      image: editedPet.image,
      category: {
        categoryId: editedPet.fkCategoryId,
        fkTypeId: editedPet.category.fkTypeId
      },
      parentHistoryAndType: editedPet.parentHistoryAndType,
      food: editedPet.food,
      gender: editedPet.gender,
      isToAdapted: editedPet.isToAdapted,
      notes: editedPet.notes,
      medicalCondition: editedPet.medicalCondition
    });
  }
  displayTypeCategories(typeSelect: HTMLSelectElement) {
    let selectedTypeId = +typeSelect.value;
    console.log(selectedTypeId);
    this.selectedTypeCategories = this.categories.filter(c => c.fkTypeId === selectedTypeId);
  }

  onSubmit(categorySelect: HTMLSelectElement) {
    if (this.addAnimalForm.valid) {
      let selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
      this.addAnimalForm
        .get("category")
        .get("name")
        .setValue(selectedCategory);

      this.pet = this.addAnimalForm.value;
      this.PetService.addPet(this.pet);
      this.addAnimalForm.reset();
      this.router.navigate(["/pet-listing"]); //in future work
      console.log(this.pet);
      console.log(this.categoryName);
      console.log(this.addAnimalForm.get("category").get("name").value);

      // console.log(this.addAnimalForm.value);
    }
  }
}
