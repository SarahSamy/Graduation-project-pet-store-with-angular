import { Category } from "../_model/Category";

export class CategoryService {
  categories: Category[];
  constructor() {
    this.categories = [
      {
        categoryId: 1,
        name: "Siamese",
        image: "../../assets/images/cat1.jpg",
        fkTypeId: 1,
        type: { name: "cat" }
      },
      {
        categoryId: 2,
        name: "Classic Persian",
        image: "../../assets/images/cat1.jpg",
        fkTypeId: 1,
        type: { name: "cat" }
      },
      {
        categoryId: 3,
        name: "Scottish Fold",
        image: "../../assets/images/cat4.jpg",
        fkTypeId: 1,
        type: { name: "cat" }
      },
      {
        categoryId: 4,
        name: "Ragamuffin",
        image: "../../assets/images/cat2.jpg",
        fkTypeId: 1,
        type: { name: "cat" }
      },
      {
        categoryId: 5,
        name: "Beagle",
        image: "../../assets/images/discover//dog9.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 6,
        name: "Haski",
        image: "../../assets/images/discover//dog8.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 7,
        name: "BullDog",
        image: "../../assets/images/discover//dog11.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 8,
        name: "Boxer",
        image: "../../assets/images/discover//dog10.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 9,
        name: "Akita ",
        image: "../../assets/images/discover//dog4.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 10,
        name: "Parrot ",
        image: "../../assets/images/parrot3.jpg",
        fkTypeId: 3,
        type: { name: "bird" }
      },
      {
        categoryId: 11,
        name: "Finches ",
        image: "../../assets/images/bird2.jpg",
        fkTypeId: 3,
        type: { name: "bird" }
      },
      {
        categoryId: 12,
        name: "Sparrow ",
        image: "assets/images/sparrow4.jpeg",
        fkTypeId: 3,
        type: { name: "bird" }
      },
      {
        categoryId: 14,
        name: " Eastern",
        image: "../../assets/images/turtle.jpg",
        fkTypeId: 4,
        type: { name: "turtle" }
      },
      {
        categoryId: 15,
        name: "Alaskan Malamute",
        image: "../../assets/images/discover//dog5.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 16,
        name: "American Eskimo Dog",
        image: "../../assets/images/discover//dog7.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 17,
        name: "American Foxhound",
        image: "../../assets/images/discover//dog8.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 18,
        name: "Afghan Hound",
        image: "../../assets/images/discover//dog2.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 19,
        name: "Affenpinscher",
        image: "../../assets/images/discover//dog1.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 20,
        name: "Airedale Terrier",
        image: "../../assets/images/discover//dog3.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 21,
        name: "Anatolian Shepherd Dog",
        image: "../../assets/images/discover//dog11.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 21,
        name: "Australian Cattle Dog",
        image: "../../assets/images/discover//dog12.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 22,
        name: "American Water Spaniel",
        image: "../../assets/images/discover//dog10.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 23,
        name: "American English Coonhound",
        image: "../../assets/images/discover//dog6.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      },
      {
        categoryId: 24,
        name: "American Staffordshire Terrier",
        image: "../../assets/images/discover//dog9.jpg",
        fkTypeId: 2,
        type: { name: "dog" }
      }
    ];
  }
  getAll(): Category[] {
    return this.categories;
  }
}
