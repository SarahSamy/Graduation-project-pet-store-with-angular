import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { Category } from 'src/app/_model/Category';
import { Type } from 'src/app/_model/Type';
import { PetService } from 'src/app/_services/pet.service';
import { CategoryService } from 'src/app/_services/category.service';
import { TypeService } from 'src/app/_services/type.service';
import { FormGroup, FormControl, FormControlName, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss']
})
export class AddAnimalFormComponent implements OnInit {

  pet: Pet;
  categories: Category[];
  types: Type[];
  addAnimalForm: FormGroup;
  // fkTypeId: number;
  // category_name: string;
  id: number;


  constructor(private PetService: PetService,
    private CategoryService: CategoryService,
    private TypeService: TypeService) {

    this.id = this.PetService.getAll().length + 1;

  }


  ngOnInit() {
    this.addAnimalForm = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl("bata"),
      age: new FormControl(25),
      image: new FormControl("assets/images/animal-19-512.png"),
      category: new FormGroup({
        categoryId: new FormControl(1),
        fkTypeId: new FormControl(3),
      }),
      parentHistoryAndType: new FormControl(),
      food: new FormControl(),
      gender: new FormControl(),
      isToAdapted: new FormControl(),
      medicalCondition: new FormControl(),
      notes: new FormControl(),
    })

    this.categories = this.CategoryService.getAll();
    this.types = this.TypeService.getAllTypes();
    // this.category_name = (this.addAnimalForm.controls.category as FormGroup).value.category_name;
    // this.fkTypeId=this.addAnimalForm.controls.category.value.fkTypeId;
    // console.log(this.addAnimalForm.controls.category.value.category_name);
  }
  onSubmit() {
    console.log(this.addAnimalForm);
    this.pet = this.addAnimalForm.value;
    console.log(this.pet);
    this.PetService.addPet(this.pet);
    console.log(this.PetService.getAll())
  }

}
