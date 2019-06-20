import { Pet } from '../_model/Pet';
import { CategoryService } from './category.service';

export class PetService {
    data: Pet[];
    constructor() {
        this.data = [

            { id: 1, name: "Bondok", image: "assets/images/dog1.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 5, name: "Beagle", fkTypeId: 2, type: { id: 2, name: "dog" } }, views: 2 },
            { id: 1, name: "kpkp", image: "assets/images/dog1.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 1, name: "Siamese", fkTypeId: 2, type: { id: 2, name: "dog" } }, views: 2 },
            { id: 1, name: "lolo", image: "assets/images/dog1.jpg", gender: "female", isToAdapted: true, age: 2, category: { categoryId: 1, name: "Haski", fkTypeId: 2, type: { id: 2, name: "dog" } }, views: 2 },
            { id: 1, name: "Bon", image: "assets/images/dog1.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 1, name: "Haski", fkTypeId: 2, type: { id: 2, name: "dog" } }, views: 2 },
            { id: 1, name: "rose", image: "assets/images/dog1.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 1, name: "Haski", fkTypeId: 2, type: { id: 2, name: "dog" } }, views: 2 },
            { id: 1, name: "jack", image: "assets/images/dog1.jpg", gender: "female", isToAdapted: true, age: 2, category: { categoryId: 1, name: "Siamese", fkTypeId: 2, type: { id: 2, name: "dog" } }, views: 2 },
            { id: 2, name: "Bossy", image: "assets/images/cat1.jpg", gender: "female", isToAdapted: true, age: 2, category: { categoryId: 2, name: "Classic Persian", fkTypeId: 1, type: { id: 1, name: "Cat" } }, views: 5 },
            { id: 3, name: "Meshmesh", image: "assets/images/cat2.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 4, name: "Ragamuffin", fkTypeId: 1, type: { id: 1, name: "Cat" } }, views: 3 },
            { id: 4, name: "ScuppyDo", image: "assets/images/dog2.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 6, name: "Haski", fkTypeId: 2, type: { id: 2, name: "Dog" } }, views: 5 },
            { id: 5, name: "Browny", image: "assets/images/cat4.jpg", gender: "female", isToAdapted: true, age: 2, category: { categoryId: 3, name: "Scottish Fold", fkTypeId: 1, type: { id: 1, name: "Cat" } }, views: 5 },
            { id: 6, name: "Tuka", image: "assets/images/cat5.jpg", gender: "female", isToAdapted: true, age: 2, category: { categoryId: 3, name: "Scottish Fold", fkTypeId: 1, type: { id: 1, name: "Cat" } }, views: 2 },
            { id: 7, name: "Lely", image: "assets/images/bird2.jpg", gender: "female", isToAdapted: true, age: 2, category: { categoryId: 11, name: "Finches ", fkTypeId: 3, type: { id: 3, name: "Bird" } }, views: 6 },
            { id: 8, name: "Loz", image: "assets/images/parrot3.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 10, name: "Parrot ", fkTypeId: 3, type: { id: 3, name: "Bird" } }, views: 2 },
            { id: 9, name: "Gamil", image: "assets/images/turtle.jpg", gender: "male", isToAdapted: true, age: 2, category: { categoryId: 12, name: " Eastern", fkTypeId: 4, type: { id: 4, name: "Turtle" } }, views: 2 },


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
    // getAllCats(): Pet[] {

    //     return this.data.filter(t => t.category.type.id == 1)
    // }
    // getAllDogs(): Pet[] {

    //     return this.data.filter(t => t.category.type.id == 2)
    // }
    // getAllBirds(): Pet[] {

    //     return this.data.filter(t => t.category.type.id == 3)
    // }
    getAllOthers(): Pet[] {

        return this.data.filter(t => t.category.type.id > 3)
    }
    getByType(typeId: number): Pet[] {
        return this.data.filter(t => t.category.type.id == typeId)
    }
    getByCategory(categoryId: Number): Pet[] {
        return this.data.filter(t => t.category.type.id == categoryId)
    }

    getMostViews() {
        return this.data.filter(p => p.views > 3)
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