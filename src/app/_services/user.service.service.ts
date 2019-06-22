import { Injectable } from '@angular/core';
import { User } from '../_model/User';
import { PetService } from '../_services/pet.service';

@Injectable({
  providedIn: 'root',

})
export class UserService {
  data: User[];
  loginUser: User;

  constructor() {
    this.data = [
      // { id: 1, firstName: "alaa", lastName: "ibrahim", email: "alaa.ibrahim@aaa.com", password: 123456, userGroupId: 1 },
      // {
      //   id: 2, firstName: "sara", lastName: "refaat", email: "sara.refaat@aaa.com", password: 123456, userGroupId: 2,
      //   pets: [
      //     { id: 1, name: "Bondok", image: "assets/images/dog1.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 5, name: "Beagle", fkTypeId: 2, type: { id: 2, name: "dog" } }, views: 2 },
      //     { id: 5, name: "Browny", image: "assets/images/cat4.jpg", gender: "female", isToAdapted: true, age: 2, category: { categoryId: 3, name: "Scottish Fold", fkTypeId: 1, type: { id: 1, name: "Cat" } }, views: 5 },
      //     { id: 9, name: "Gamil", image: "assets/images/turtle.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 12, name: " Eastern", fkTypeId: 4, type: { id: 4, name: "Turtle" } }, views: 2 },
      //   ]
      // },

      // {id:1,firstName:"alaa",lastName:"ibrahim",email : "alaaebrahim336@gmail.com",password:"123456",userGroupId:1,image:"../../../../assets/images/comments/John-Amaechi-OBE_portraitfeatured.jpg"},
      // {id:2,firstName:"sara",lastName:"refaat",email : "sara.refaat@aaa.com",password:"123456",userGroupId:2,image:'../../../../assets/images/comments/images (1).jpg'},

      { id: 1, firstName: "alaa", lastName: "ibrahim", email: "alaaebrahim336@gmail.com", password: "123456", userGroupId: 1, image: "../../../../assets/images/comments/John-Amaechi-OBE_portraitfeatured.jpg" },
      {
        id: 2, firstName: "sara", lastName: "refaat", email: "sara.refaat@aaa.com", password: "123456", userGroupId: 2, image: '../../../../assets/images/girl.jpg', pets: [
          { petId: 1, name: "Bondok", image: "assets/images/dog1.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 5, name: "Beagle", fkTypeId: 2, type: { id: 2, name: "dog" } }, views: 2 },
          { petId: 5, name: "Browny", image: "assets/images/cat4.jpg", gender: "female", isToAdapted: true, age: 2, category: { categoryId: 3, name: "Scottish Fold", fkTypeId: 1, type: { id: 1, name: "Cat" } }, views: 5 },
          { petId: 9, name: "Gamil", image: "assets/images/turtle.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 12, name: " Eastern", fkTypeId: 4, type: { id: 4, name: "Turtle" } }, views: 2 },
        ]
      },
    ]
  }
  SearchForUser(email: string, password: string): User {
    return this.loginUser = this.data.find(u => u.email === email && u.password == password);
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

  logout() {
    this.loginUser = null;
  }


  login(currentUser?: User): boolean {
    let result: boolean
    if (currentUser) {
      result = true;

    }
    else {
      result = false;
    }
    return result;
  }



}

