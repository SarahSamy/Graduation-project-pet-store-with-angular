import { Category } from '../_model/Category';


export class CategoryService {
	categories: Category[];
	constructor() {
		this.categories = [
			// { categoryId: 1, name: "Dog" },
			// { categoryId: 2, name: "Cat" },
			// { categoryId: 3, name: "Others" }
			{ categoryId: 1, category_name: "Siamese", fkTypeId: 1, type: { name: "Cat" } },
			{ categoryId: 2, category_name: "Classic Persian", fkTypeId: 1, type: { name: "Cat" } },
			{ categoryId: 3, category_name: "Scottish Fold", fkTypeId: 1, type: { name: "Cat" } },
			{ categoryId: 4, category_name: "Ragamuffin", fkTypeId: 1, type: { name: "Cat" } },
			{ categoryId: 5, category_name: "Beagle", fkTypeId: 2, type: { name: "Dog" } },
			{ categoryId: 6, category_name: "Haski", fkTypeId: 2, type: { name: "Dog" } },
			{ categoryId: 7, category_name: "BullDog", fkTypeId: 2, type: { name: "Dog" } },
			{ categoryId: 8, category_name: "Boxer", fkTypeId: 2, type: { name: "Dog" } },
			{ categoryId: 9, category_name: "Akita ", fkTypeId: 2, type: { name: "Dog" } },
			{ categoryId: 10, category_name: "Parrot ", fkTypeId: 3, type: { name: "Bird" } },
			{ categoryId: 11, category_name: "Finches ", fkTypeId: 3, type: { name: "Bird" } },
			{ categoryId: 12, category_name: "Sparrow ", fkTypeId: 3, type: { name: "Bird" } },
			{ categoryId: 12, category_name: " Eastern", fkTypeId: 4, type: { name: "Turtle" } },
			// 	{ categoryId: 2, name: "Alaskan Malamute" },
			// 	{ categoryId: 3, name: "American Eskimo Dog" },
			// 	{ categoryId: 4, name: "American Foxhound" },
			// 	{ categoryId: 9, name: "Afghan Hound" },
			// 	{ categoryId: 9, name: "Affenpinscher" },
			// 	{ categoryId: 9, name: "Airedale Terrier" },
			// 	{ categoryId: 6, name: "Anatolian Shepherd Dog" },
			// 	{ categoryId: 7, name: "Australian Cattle Dog" },
			// 	{ categoryId: 5, name: "American Water Spaniel" },
			// 	{ categoryId: 8, name: "American English Coonhound" },
			// 	{ categoryId: 9, name: "American Staffordshire Terrier" },
		]
	}
	getAll(): Category[] {
		return this.categories;
	}
}