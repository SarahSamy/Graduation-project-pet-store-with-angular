import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { Category } from 'src/app/_model/Category';
import { Type } from 'src/app/_model/Type';
import { PetService } from 'src/app/_services/pet.service';
import { CategoryService } from 'src/app/_services/category.service';
import { TypeService } from 'src/app/_services/type.service';

@Component({
  selector: 'app-add-animal-form',
  templateUrl: './add-animal-form.component.html',
  styleUrls: ['./add-animal-form.component.scss']
})
export class AddAnimalFormComponent implements OnInit {
  pet: Pet;
  categories: Category[];
  dog_types: Type[];
  cat_types: Type[];

  constructor(private PetService: PetService,
    private CategoryService: CategoryService,
    private TypeService: TypeService) {
  }


  ngOnInit() {
    this.categories = this.CategoryService.getAll();
    this.dog_types = this.TypeService.getAllTypes();

  }

}
