import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { Category } from 'src/app/_model/Category';
import { Type } from 'src/app/_model/Type';
import { PetService } from 'src/app/_services/pet.service';
import { CategoryService } from 'src/app/_services/category.service';
import { TypeService } from 'src/app/_services/type.service';
import { FormGroup, FormControl, FormControlName, AbstractControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss']
})
export class AddAnimalFormComponent implements OnInit {

  pet: Pet;
  editedPet: Pet;
  categories: Category[];
  types: Type[];
  addAnimalForm: FormGroup;
  id: number;


  constructor(private PetService: PetService,
    private CategoryService: CategoryService,
    private TypeService: TypeService, private router: Router,
    private activatedroute: ActivatedRoute
  ) {
    this.id = this.PetService.getAll().length + 1;
  }


  ngOnInit() {
    this.addAnimalForm = new FormGroup({
      animalId: new FormControl(this.id),
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern(/^[A-Za-z]+(?:[_-][A-Za-z]+)*$/)]),
      age: new FormControl('', [Validators.required, Validators.max(100), Validators.pattern(/^[0-9]*$/)]),
      image: new FormControl("assets/images/animal-19-512.png"),
      category: new FormGroup({
        categoryId: new FormControl('', Validators.required),
        fkTypeId: new FormControl('', Validators.required),
      }),
      parentHistoryAndType: new FormControl('', Validators.required),
      food: new FormControl('', Validators.required),
      gender: new FormControl(),
      isToAdapted: new FormControl(),
      medicalCondition: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required),
    });

    this.categories = this.CategoryService.getAll();
    this.types = this.TypeService.getAllTypes();

    this.activatedroute.paramMap.subscribe(params => {
      const petId = +params.get('id')
      if (petId) {
        this.getPet(petId)
      }
    })

  }
  getPet(petId: number) {
    this.editedPet = this.PetService.getById(petId);
    this.editPet(this.editedPet);
  }
  editPet(Pet: Pet) {
    this.addAnimalForm.patchValue({
      name: Pet.name,
      age: Pet.age,
      image: Pet.image,
      category: {
        categoryId: Pet.fkCategoryId,
        fkTypeId: Pet.category.fkTypeId,
      },
      parentHistoryAndType: Pet.parentHistoryAndType,
      food: Pet.food,
      gender: Pet.gender,
      isToAdapted: Pet.isToAdapted,
      notes: Pet.notes,
      medicalCondition: Pet.medicalCondition,
    })
  }

  onSubmit() {
    if (this.addAnimalForm.valid) {

      this.pet = this.addAnimalForm.value;
      this.PetService.addPet(this.pet);
      this.addAnimalForm.reset();
      // this.router.navigate(['/pet-listing']);//in future work
      console.log(this.pet);
      // console.log(this.addAnimalForm.value);
      // console.log(this.addAnimalForm.getRawValue());
      // console.log(this.addAnimalForm);
    }
  }

}
