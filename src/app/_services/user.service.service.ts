import { Injectable } from "@angular/core";
import { User } from "../_model/User";
import { PetService } from "../_services/pet.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  data: User[];
  loginUser: User;

  constructor() {
    this.data = [
      {
        id: 1,
        firstName: "Alaa",
        lastName: "ibrahim",
        email: "alaaebrahim336@gmail.com",
        password: "123456",
        userGroupId: 1,
        image:
          "../../../../assets/images/comments/John-Amaechi-OBE_portraitfeatured.jpg",
        cover: "../../../../assets/images/doc1.jpg"
      },
      {
        id: 2,
        firstName: "Sarah",
        lastName: "refaat",
        email: "sara.refaat@aaa.com",
        password: "123456",
        userGroupId: 2,
        image: "../../../../assets/images/girl.jpg",
        cover: "../../../../assets/images/doc1.jpg"
      },
      {
        id: 3,
        firstName: "Fatima",
        lastName: "shabana",
        email: "fatimashabana@gmail.com",
        password: "123456",
        userGroupId: 2,
        image: "../../../../assets/images/girl.jpg",
        cover: "../../../../assets/images/doc1.jpg"
      }
    ];
  }
  SearchForUser(email: string, password: string): User {
    return (this.loginUser = this.data.find(
      u => u.email === email && u.password == password
    ));
  }
  getAll(): User[] {
    return this.data;
  }
  getById(id: number): User {
    return this.data.find(user => user.id === id);
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

  login() {
    if (this.loginUser) {
      return this.loginUser;
    } else {
      return null;
    }
  }
}
