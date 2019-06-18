import { Category } from '../_model/Category';


export class CategoryService {
	categories: Category[];
	constructor() {
		this.categories = [
			// { id: 1, name: "Dog" },
			// { id: 2, name: "Cat" },
			// { id: 3, name: "Others" }
			{ id: 1, name: "Siamese", typeId: 1, type: { name: "Cat" } },
			{ id: 2, name: "Classic Persian", typeId: 1, type: { name: "Cat" } },
			{ id: 3, name: "Scottish Fold", typeId: 1, type: { name: "Cat" } },
			{ id: 4, name: "Ragamuffin", typeId: 1, type: { name: "Cat" } },
			{ id: 5, name: "Beagle", typeId: 2, type: { name: "Dog" } },
			{ id: 6, name: "Haski", typeId: 2, type: { name: "Dog" } },
			{ id: 7, name: "BullDog", typeId: 2, type: { name: "Dog" } },
			{ id: 8, name: "Boxer", typeId: 2, type: { name: "Dog" } },
			{ id: 9, name: "Akita ", typeId: 2, type: { name: "Dog" } },
			{ id: 10, name: "Parrot ", typeId: 3, type: { name: "Bird" } },
			{ id: 11, name: "Finches ", typeId: 3, type: { name: "Bird" } },
			{ id: 12, name: "Sparrow ", typeId: 3, type: { name: "Bird" } },
			{ id: 12, name: " Eastern", typeId: 4, type: { name: "Turtle" } },
			// 	{ id: 2, name: "Alaskan Malamute" },
			// 	{ id: 3, name: "American Eskimo Dog" },
			// 	{ id: 4, name: "American Foxhound" },
			// 	{ id: 9, name: "Afghan Hound" },
			// 	{ id: 9, name: "Affenpinscher" },
			// 	{ id: 9, name: "Airedale Terrier" },
			// 	{ id: 6, name: "Anatolian Shepherd Dog" },
			// 	{ id: 7, name: "Australian Cattle Dog" },
			// 	{ id: 5, name: "American Water Spaniel" },
			// 	{ id: 8, name: "American English Coonhound" },
			// 	{ id: 9, name: "American Staffordshire Terrier" },
		]
	}
	getAll(): Category[] {
		return this.categories;
	}
}