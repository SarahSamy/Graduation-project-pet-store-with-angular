import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from 'src/app/_model/pet';
import { User } from 'src/app/_model/user';
import { Router } from '@angular/router';
import {UserService} from 'src/app/_services/user.service.service';
import { PetService } from 'src/app/_services/pet.service';
@Component({
  selector: 'pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.scss']
})
export class PetItemComponent implements OnInit {

  @Input() pet: Pet;
 // @Input() data;
 @Output() removeClick= new EventEmitter<any>();
  user:User
  userPet:Pet[]
  constructor(private router: Router, private petService: PetService,private userService:UserService) {
    
  }

  ngOnInit() {
   
    if(this.userService.loginUser){
      this.user=this.userService.loginUser;
      console.log(this.user);
      this.userPet=this.petService.getByUserId(this.user.id);
      // return this.user
    }
    console.log(this.pet);
    // if (!this.data) {
    //   this.data = this.petService.getAll();
    //   return this.data
    // }
  }
  editButtonClick(PetId: Number) {
    this.router.navigate(['Edit-Animal', PetId])
  }

  
  // getPetById(id){
    
  //   return this.data.data.filter(p=>p.PetId==id)
   
  // }
}
