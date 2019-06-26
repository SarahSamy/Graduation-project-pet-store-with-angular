import { Component, OnInit ,Input} from '@angular/core';
import { PetService } from 'src/app/_services/pet.service';
import { Pet } from 'src/app/_model/pet';
import { ActivatedRoute } from "@angular/router";
import { Category } from 'src/app/_model/category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent implements OnInit {
  @Input() pet : Pet;
  @Input() data
  category:Category;
  categoryService:CategoryService;
  petId


  constructor( cat:CategoryService ,private petService:PetService, private route: ActivatedRoute) {
this.categoryService=cat;
   }

  ngOnInit() {
    this.route.params.subscribe(paramsId => {
      this.petId = paramsId;
  });
  this.petId= this.petId.id;
  
    if (!this.data) {
      this.data = this.petService.getById(Number(this.petId));
      
     // this.category=this.categoryService.getById(this.data.ca)
     return this.data
    }
  }

}
