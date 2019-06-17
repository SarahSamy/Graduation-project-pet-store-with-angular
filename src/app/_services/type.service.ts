import { Type } from '../_model/Type';


export class TypeService {
	dog_types: Type[];
	cat_types: Type[];

	constructor() {
		this.dog_types = [
			{ id: 1, name: "Akita " },
			{ id: 2, name: "Alaskan Malamute" },
			{ id: 3, name: "American Eskimo Dog" },
			{ id: 4, name: "American Foxhound" },
			{ id: 9, name: "Afghan Hound" },
			{ id: 9, name: "Affenpinscher" },
			{ id: 9, name: "Airedale Terrier" },
			{ id: 6, name: "Anatolian Shepherd Dog" },
			{ id: 7, name: "Australian Cattle Dog" },
			{ id: 5, name: "American Water Spaniel" },
			{ id: 8, name: "American English Coonhound" },
			{ id: 9, name: "American Staffordshire Terrier" },

		];
		this.cat_types = [
			{ id: 1, name: "Dog" },
			{ id: 2, name: "Cat" },
			{ id: 3, name: "Others" }
		]
	}
	getAllDogTypes(): Type[] {
		return this.dog_types;
	}
	getAllCatTypes(): Type[] {
		return this.dog_types;
	}
}