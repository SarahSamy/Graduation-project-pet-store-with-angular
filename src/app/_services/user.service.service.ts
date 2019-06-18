import { Injectable } from '@angular/core';
import { User } from '../_model/User';
import { PetService } from '../_services/pet.service';

@Injectable({
  providedIn: 'root',

})
export class UserService {
  data: User[];

  constructor(private PetService: PetService) {
    this.data = [
      // {id:1,firstName:"alaa",lastName:"ibrahim",email : "alaa.ibrahim@aaa.com",password:1234,gender:"female",pets:[PetService.data[0],PetService.data[2]]},
      // {id:2,firstName:"sarah",lastName:"refaat",email : "sarah.refaat@aaa.com",password:12345,gender:"female",pets:[PetService.data[1],PetService.data[2]]},
    ]

  }
  getAll(): User[] {
    return this.data;
  }
  getById(id: number): User {
    return this.data.find((user) => user.id === id);
  }
  addPet(user: User) {
    user.id = this.data.length + 1;
    this.data.push(user);
  }
  update(user: User) {
    // const i = this.data.indexOf(pet);
    const i = this.data.findIndex(p => p.id === user.id);
    this.data[i] = user;
  }
  delete(id: number) {
    const i = this.data.findIndex(p => p.id === id);
    this.data.splice(id, 1);
  }

  login(currentUser?: User): boolean {
    let result: boolean;
    if (currentUser) {
      result = true;

    }
    else {
      result = false;
    }
    return result;
  }
}

