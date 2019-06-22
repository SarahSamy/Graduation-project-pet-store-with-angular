import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service.service';
import { Pet } from 'src/app/_model/pet';
import { PetService } from 'src/app/_services/pet.service';
import { User } from 'src/app/_model/User';

@Component({
  selector: 'manage-pets',
  templateUrl: './manage-pets.component.html',
  styleUrls: ['./manage-pets.component.scss']
})
export class ManagePetsComponent implements OnInit {
  images:string[]
  data:Pet[]
  config: any;
  message:string;
  user:User;

  constructor(private userService:UserService,private petService:PetService) { 
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      // totalItems: this.data.length
    }
  }

  ngOnInit() {
    // this.data=this.petService.data.filter(p=>(p.id==5)||(p.id==6)||(p.id==9))
    if(this.userService.loginUser.pets){
      this.data= this.userService.loginUser.pets;
    }
    else{
      this.message="you don't have pets.You can add your pets";
    }
    this.user=this.userService.loginUser;
    
    
  }
  pageChanged(event){
    this.config.currentPage = event;
    
  }
  




  // getImages(arr){
  //   arr.array.forEach(element => {
  //     this.data=this.petService.data.filter(p=>p.id==element)
  //   });
  //   this.images=this.data.map(p=>p.image)
  // }
}
