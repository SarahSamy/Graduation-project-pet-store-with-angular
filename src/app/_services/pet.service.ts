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
        isDeleted: false
      },
      {
        petId: 2,
        name: "kpkp",
        image: "assets/images/dog2.jpg",
        gender: "male",
        isToAdapted: false,
        age: 2,
        category: {
          categoryId: 7,
          name: "BullDog",
          fkTypeId: 2,
          type: { id: 2, name: "dog" }
        },
        views: 2,
        userId: 3,
        isDeleted: false
      },
      {
        petId: 3,
        name: "lolo",
        image: "assets/images/dog3.jpg",
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
        userId: 3,
        isDeleted: false
      },
      {
        petId: 4,
        name: "Bon",
        image: "assets/images/dog4.jpg",
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
        userId: 3,
        isDeleted: false
      },
      {
        petId: 5,
        name: "rose",
        image: "assets/images/dog5.jpg",
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
        userId: 2,
        isDeleted: false
      },
      {
        petId: 6,
        name: "jack",
        image: "assets/images/dog9.jpg",
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
        userId: 3,
        isDeleted: false
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
        userId: 3,
        isDeleted: false
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
        userId: 3,
        isDeleted: false
      },
      {
        petId: 9,
        name: "ScuppyDo",
        image: "assets/images/dog2.jpg",
        gender: "male",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 8,
          name: "Boxer",
          fkTypeId: 2,
          type: { id: 2, name: "Dog" }
        },
        views: 5,
        userId: 2,
        isDeleted: false
      },
      {
        petId: 10,
        name: "Browny",
        image: "assets/images/cat8.jpg",
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
        userId: 2,
        isDeleted: false
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
        userId: 3,
        isDeleted: false
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
        userId: 3,
        isDeleted: false
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
        userId: 3,
        isDeleted: false
      },
      {
        petId: 14,
        name: "Gamil",
        image: "assets/images/turtle.jpg",
        gender: "male",
        isToAdapted: true,
        age: 2,
        category: {
          categoryId: 14,
          name: " Eastern",
          fkTypeId: 4,
          type: { id: 4, name: "Turtle" }
        },
        views: 2,
        userId: 2,
        isDeleted: false
      }
    ];
  }
  getAll(): Pet[] {
    return this.data;
  }
  getAllAdapted(): Pet[] {
    return this.data.filter(p => p.isToAdapted === true);
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
  }
  delete(id: number) {
    let i = this.data.find(p => p.petId === id);
    // this.data.splice(id, 1);
    i.isDeleted = true;
    console.log(this.data);
  }

  getAllOthers(): Pet[] {
    return this.data.filter(t => t.category.fkTypeId > 3);
  }
  getByType(typeId: number): Pet[] {
    return this.data.filter(t => t.category.fkTypeId == typeId);
  }
  getByTypeAdapted(typeId: number): Pet[] {
    return this.data.filter(
      t => t.category.fkTypeId == typeId && t.isToAdapted == true
    );
  }
  getByCategory(categoryId: number): Pet[] {
    return this.data.filter(t => t.category.categoryId == categoryId);
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
