import { Component, OnInit ,Input} from '@angular/core';
import { PetService } from 'src/app/_services/pet.service';
import { Pet } from 'src/app/_model/pet';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss']
})
export class PetProfileComponent implements OnInit {
  @Input() pet : Pet;
  @Input() data
  queryId:string
  animal
  petId


  constructor(private petService:PetService , private route: ActivatedRoute) {
    // this.route.snapshot.queryParamMap
  
   }

  ngOnInit() {
    // this.animal = this.route.snapshot.paramMap.get("animal")
    // this.queryId = this.route.snapshot.queryParamMap.get("paramId")
    // console.log(this.queryId)
    this.route.params.subscribe(paramsId => {
      this.petId = paramsId;
  });
  this.petId= this.petId.id;
  console.log(this.petId);
    if (!this.data) {
      this.data = this.petService.getById(Number(this.petId))
     return this.data
    }
  }
  // getById(id){
    
  //   this.petId=Number(id)
  //   // this.data=this.petService.getById(this.petId)
  //   console.log(this.petId)
  //   console.log(this.data)
  //   return this.data;
  // }
}
