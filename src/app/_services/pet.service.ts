import { Pet } from '../_model/Pet';
import { CategoryService } from './category.service';

export class PetService {
    data: Pet[];
    constructor() {
        this.data = [
            { id: 1, name: "Bondok", image: "assets/images/dog1.jpg", gender: "male", categoryId:5,isAdapt:true,age:2,categoryName:"Beagle"},
            { id: 2, name: "Bossy", image: "assets/images/cat1.jpg", gender: "female", categoryId:2,isAdapt:true,age:2,categoryName:"Classic Persian"},
            { id: 3, name: "Meshmesh", image: "assets/images/cat2.jpg", gender: "male", categoryId:4,isAdapt:true,age:2,categoryName:"Ragamuffin"},
            // { id: 4, name: "ScuppyDo", image: "assets/images/dog2.jpg", gender: "male", categoryId:6,isAdapt:true,age:2,categoryName:"Haski"},
            // { id: 5, name: "Browny", image: "assets/images/cat4.jpg", gender: "male", categoryId:3,isAdapt:true,age:2,categoryName:"Scottish Fold"},
            // { id: 6, name: "Tuka", image: "assets/images/cat5.jpg", gender: "male", categoryId:3,isAdapt:true,age:2,categoryName:"Scottish Fold"},
            // { id: 2, name: "Bossy", image: "assets/images/cat1.jpg", gender: "female", type: { name: "Adult" }, category: { name: "Classic Persian" } },
            // { id: 3, name: "Meshmesh", image: "assets/images/cat2.jpg", gender: "male", type: { name: "kitty" }, category: { name: "Ragamuffin" } }
        ]
    }
    getAll(): Pet[] {
        return this.data;
    }
    getById(id: number): Pet {
        return this.data.find((pet) => pet.id === id);
    }
    addPet(pet: Pet) {
        pet.id = this.data.length + 1;
        this.data.push(pet);
    }
    update(pet: Pet) {
        // const i = this.data.indexOf(pet);
        const i = this.data.findIndex(p => p.id === pet.id);
        this.data[i] = pet;
    }
    delete(id: number) {
        const i = this.data.findIndex(p => p.id === id);
        this.data.splice(id, 1);
    }
}