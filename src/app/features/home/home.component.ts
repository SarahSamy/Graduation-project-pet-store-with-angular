import { Component, OnInit ,Input}  from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { PetService } from 'src/app/_services/pet.service';
import { Pet } from 'src/app/_model/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() images: string []
  data: Pet []
  constructor(private petService: PetService) {
    if(!this.images){
      this.images=["../../../assets/images/care1.jpg","../../../assets/images/care3.jpg","../../../assets/images/care4.jpg"]
     }
     if(!this.data){
      this.data=this.petService.getMostViews().slice(0,3)
     }
   }

  ngOnInit() {
  }

}
