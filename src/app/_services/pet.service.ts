import { Pet } from "../_model/Pet";
import { CategoryService } from "./category.service";

export class PetService {
  data: Pet[];
  constructor() {
    this.data = [
      {
        petId: 1,
        name: "Bondok",
        image: "assets/images/dog1.jpg",
        gender: "female",
        isToAdapted: false,
        age: 2,
        category: {
          categoryId: 5,
          name: "Beagle",
          fkTypeId: 2,
          type: { id: 2, name: "dog" }
        },
        views: 2,
        userId: 3,
        food: "bones,checken",
        medicalCondition: "not infected by any disease",
        parentHistoryAndType: "his parent also from same category"
      },
      {
        petId: 2,
        name: "kpkp",
        image: "assets/images/dog1.jpg",
        gender: "male",
        isToAdapted: false,
        age: 2,
        category: {
          categoryId: 5,
          name: "Beagle",
          fkTypeId: 2,
          type: { id: 2, name: "dog" }
        },
        views: 2,
        userId: 3
      },
      {
        petId: 3,
        name: "lolo",
        image: "assets/images/dog1.jpg",
        gender: "female",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 6,
          name: "Haski",
          fkTypeId: 2,
          type: { id: 2, name: "dog" }
        },
        views: 2,
        userId: 3
      },
      {
        petId: 4,
        name: "Bon",
        image: "assets/images/dog1.jpg",
        gender: "male",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 6,
          name: "Haski",
          fkTypeId: 2,
          type: { id: 2, name: "dog" }
        },
        views: 2,
        userId: 3
      },
      {
        petId: 5,
        name: "rose",
        image: "assets/images/dog1.jpg",
        gender: "male",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 6,
          name: "Haski",
          fkTypeId: 2,
          type: { id: 2, name: "dog" }
        },
        views: 2,
        userId: 2
      },
      {
        petId: 6,
        name: "jack",
        image: "assets/images/dog1.jpg",
        gender: "female",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 7,
          name: "BullDog",
          fkTypeId: 2,
          type: { id: 2, name: "dog" }
        },
        views: 2,
        userId: 3
      },
      {
        petId: 7,
        name: "Bossy",
        image: "assets/images/cat1.jpg",
        gender: "female",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 2,
          name: "Classic Persian",
          fkTypeId: 1,
          type: { id: 1, name: "Cat" }
        },
        views: 5,
        userId: 3
      },
      {
        petId: 8,
        name: "Meshmesh",
        image: "assets/images/cat2.jpg",
        gender: "male",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 1,
          name: "Ragamuffin",
          fkTypeId: 1,
          type: { id: 1, name: "Cat" }
        },
        views: 3,
        userId: 3
      },
      {
        petId: 9,
        name: "ScuppyDo",
        image: "assets/images/dog2.jpg",
        gender: "male",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 6,
          name: "Haski",
          fkTypeId: 2,
          type: { id: 2, name: "Dog" }
        },
        views: 5,
        userId: 2
      },
      {
        petId: 10,
        name: "Browny",
        image: "assets/images/cat4.jpg",
        gender: "female",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 3,
          name: "Scottish Fold",
          fkTypeId: 1,
          type: { id: 1, name: "Cat" }
        },
        views: 5,
        userId: 2
      },
      {
        petId: 11,
        name: "Tuka",
        image: "assets/images/cat5.jpg",
        gender: "female",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 3,
          name: "Scottish Fold",
          fkTypeId: 1,
          type: { id: 1, name: "Cat" }
        },
        views: 2,
        userId: 3
      },
      {
        petId: 12,
        name: "Lely",
        image: "assets/images/bird2.jpg",
        gender: "female",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 11,
          name: "Finches ",
          fkTypeId: 3,
          type: { id: 3, name: "Bird" }
        },
        views: 6,
        userId: 3
      },
      {
        petId: 13,
        name: "Loz",
        image: "assets/images/parrot3.jpg",
        gender: "male",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 10,
          name: "Parrot ",
          fkTypeId: 3,
          type: { id: 3, name: "Bird" }
        },
        views: 2,
        userId: 3
      },
      {
        petId: 14,
        name: "Gamil",
        image: "assets/images/turtle.jpg",
        gender: "male",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 12,
          name: " Eastern",
          fkTypeId: 4,
          type: { id: 4, name: "Turtle" }
        },
        views: 2,
        userId: 2
      }
    ];
  }
  getAll(): Pet[] {
    return this.data;
  }
  getById(id: number): Pet {
    return this.data.find(pet => pet.petId === id);
  }
  addPet(pet: Pet) {
    pet.petId = this.data.length + 1;
    this.data.push(pet);
  }
  update(pet: Pet) {
    // const i = this.data.indexOf(pet);
    const i = this.data.findIndex(p => p.petId === pet.petId);
    this.data[i] = pet;
    console.log(this.data[i], i);
  }
  delete(id: number) {
    const i = this.data.findIndex(p => p.petId === id);
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
    return this.data.filter(t => t.category.fkTypeId > 3);
  }
  getByType(typeId: number): Pet[] {
    return this.data.filter(t => t.category.fkTypeId == typeId);
  }
  getByCategory(categoryId: number): Pet[] {
    return this.data.filter(t => t.category.type.id == categoryId);
  }

  getMostViews() {
    return this.data.filter(p => p.views > 3);
  }
  getByUserId(userId: number): Pet[] {
    return this.data.filter(pet => pet.userId === userId);
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
