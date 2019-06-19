import { Pet } from '../_model/Pet';
import { CategoryService } from './category.service';

export class PetService {
    data: Pet[];
    constructor() {
        this.data = [
            { id: 1, name: "Bondok", image: "assets/images/dog1.jpg", gender: "male",isAdapt:true,age:2,category:{ id: 1, name: "Siamese",typeId:2, type:{ id: 2,name:"Dog"} },views:2},
            { id: 2, name: "Bossy", image: "assets/images/cat1.jpg", gender: "female" ,isAdapt:true,age:1,category:{ id: 2, name: "Classic Persian" ,typeId:1,type:{ id: 1,name:"Cat"}},views:5},
            { id: 3, name: "Meshmesh", image: "assets/images/cat2.jpg", gender: "male" ,isAdapt:true,age:2,category:{ id: 4, name: "Ragamuffin",typeId:1 ,type:{ id: 1,name:"Cat"}},views:3},
            { id: 4, name: "ScuppyDo", image: "assets/images/dog2.jpg", gender: "male",isAdapt:true,age:2,category:{ id: 6, name: "Haski" ,typeId:2,type:{ id: 2,name:"Dog"}},views:5},
            { id: 5, name: "Browny", image: "assets/images/cat4.jpg", gender: "female",isAdapt:true,age:2,category:{ id: 3, name: "Scottish Fold",typeId:1,type:{ id: 1,name:"Cat"} },views:5},
            { id: 6, name: "Tuka", image: "assets/images/cat5.jpg", gender: "female",isAdapt:true,age:2,category:{ id: 3, name: "Scottish Fold",typeId:1,type:{ id: 1,name:"Cat"} },views:2},
            { id: 7, name: "Lely", image: "assets/images/bird2.jpg", gender: "female",isAdapt:true,age:2,category:{ id: 11, name: "Finches ",typeId:3 ,type:{id:3,name:"Bird"} },views:6},
            { id: 8, name: "Loz", image: "assets/images/parrot3.jpg", gender: "male",isAdapt:true,age:2,category:{ id: 10, name: "Parrot ",typeId:3 ,type:{id:3,name:"Bird"} },views:2},
            { id: 9, name: "Gamil", image: "assets/images/turtle.jpg", gender: "male",isAdapt:true,age:1,category:{ id: 12, name: " Eastern",typeId:4 ,type:{id:4,name:"Turtle"} },views:2},
           

            
           
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

    getByType(typeId:number): Pet[]{
        return this.data.filter(t=>t.category.type.id==typeId)
    }


    getAllOthers(): Pet[]{
		
		return this.data.filter(t=>t.category.type.id>3)
    }
    getMostViews(){
        return this.data.filter(p=>p.views>3)
    }
}

//--------------------------------------------------------------

    // getAllCats(): Pet[]{
		
	// 	return this.data.filter(t=>t.category.type.id==1)
    // }
    // getAllDogs(): Pet[]{
		
	// 	return this.data.filter(t=>t.category.type.id==2)
    // }
    // getAllBirds(): Pet[]{
		
	// 	return this.data.filter(t=>t.category.type.id==3)
    // }