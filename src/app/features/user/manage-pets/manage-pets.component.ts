import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service.service';
import { Pet } from 'src/app/_model/Pet';
import { PetService } from 'src/app/_services/pet.service';
import { User } from 'src/app/_model/User';
import { Router } from "@angular/router"

@Component({
  selector: 'manage-pets',
  templateUrl: './manage-pets.component.html',
  styleUrls: ['./manage-pets.component.scss']
})
export class ManagePetsComponent implements OnInit {
  images: string[]
  data: Pet[]
  config: any;
  message: string;
  user: User;
  loginUser: User;

  constructor(private userService: UserService, private petService: PetService,private router: Router) {
   this.loginUser=this.userService.loginUser;
    if (this.userService.loginUser) {
      this.user=this.userService.loginUser;
      this.data = this.petService.data.filter(p=>p.userId==this.user.id);
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        
         totalItems: this.data.length
      }
      if(this.data.length==0){
        this.message = "you don't have pets.You can add your pets";
      }
    }
    else{
      this.router.navigate(['/Login']);
    }
   
  }

  ngOnInit() {
   

    if (this.userService.loginUser) {
      this.user=this.userService.loginUser;
      this.data = this.petService.data.filter(p=>p.userId==this.user.id);
      if(this.data.length==0){
        this.message = "you don't have pets.You can add your pets";
      }
    }

  }
  pageChanged(event) {
    this.config.currentPage = event;

  }

  deletePet(id) {
    this.petService.delete(id);
 
   
      this.data = this.data.filter(p => p.isDeleted == false && p.isToAdapted === true)
    }

  
 
}
