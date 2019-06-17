import { Category } from '../_model/Category';


export class CategoryService {
	categories: Category[];
	constructor() {
		this.categories = [
			{ id: 1, name: "Siamese",typeId:1 },
			{ id: 2, name: "Classic Persian" ,typeId:1},
			{ id: 3, name: "Scottish Fold",typeId:1 },
			{ id: 4, name: "Ragamuffin",typeId:1 },
			{ id: 5, name: "Beagle",typeId:2 },
			{ id: 6, name: "Haski" ,typeId:2},
			{ id: 7, name: "BullDog",typeId:2 },
			{ id: 8, name: "Boxer",typeId:2 },
			{ id: 9, name: "Akita ",typeId:2  },
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